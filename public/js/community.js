//   LER O HOBBY DA URL
// ================================
const params = new URLSearchParams(window.location.search);
const hobby = params.get("hobby") || "Sports";

// Atualiza título automaticamente
document.querySelector("header h2").textContent =
    hobby.charAt(0).toUpperCase() + hobby.slice(1);


//  SISTEMA DE COMENTÁRIOS LOCAL
// ================================
const commentInput = document.querySelector("#add_comment");
const commentsSection = document.querySelector(".comments");

// PEGA O USUÁRIO LOGADO
let user = JSON.parse(localStorage.getItem("loggedUser"));
const username = user?.name || "Usuário";


// ---- Calcula tempo relativo da postagem ---- //
function formatTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return "agora mesmo";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min atrás`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h atrás`;

    const days = Math.floor(hours / 24);
    return `${days} dia${days > 1 ? "s" : ""} atrás`;
}


// ---- Cria o HTML de um comentário ---- //
function createCommentCard(data) {
    const timeText = formatTime(data.timestamp);

    const div = document.createElement("div");
    div.className = "comment-card flex-column gap-1";
    div.setAttribute("data-id", data.id);

    div.innerHTML = `
        <div class='flex-row centerX space-between text-sm'>
            <div>
                <div class="avatar-small"></div>
                <span>${data.user}</span>
            </div>
            <p>${timeText}</p>
        </div>

        <div class="comment flex-column gap-1">
            <h3 class="text-2x1 comment-text">${data.text}</h3>
        </div>

        ${data.user === username ? `
            <div class="flex-row gap-2" style="align-self:flex-end;">
                <button class="edit-btn btn-blue text-sm">Editar</button>
                <button class="delete-btn btn-white text-sm">Remover</button>
            </div>
        ` : ""}
    `;

    // Botão de deletar
    const del = div.querySelector(".delete-btn");
    if (del) {
        del.addEventListener("click", () => deleteComment(data.id));
    }

    // Botão de editar
    const edit = div.querySelector(".edit-btn");
    if (edit) {
        edit.addEventListener("click", () => editComment(data.id, div));
    }

    return div;
}


// ---- Carrega comentários salvos ---- //
function loadComments() {
    const list = JSON.parse(localStorage.getItem("comments_" + hobby)) || [];
    commentsSection.innerHTML = "";

    list.forEach(item => {
        const card = createCommentCard(item);
        commentsSection.appendChild(card);
    });
}


// ---- Salvar novo comentário ---- //
function saveComment() {
    const text = commentInput.value.trim();
    if (!text) return;

    const newComment = {
        id: Date.now(),
        user: username,
        text,
        timestamp: Date.now()
    };

    const existing = JSON.parse(localStorage.getItem("comments_" + hobby)) || [];
    existing.push(newComment);

    localStorage.setItem("comments_" + hobby, JSON.stringify(existing));

    commentsSection.appendChild(createCommentCard(newComment));

    commentInput.value = "";
}


// ---- Remover comentário ---- //
function deleteComment(id) {
    let list = JSON.parse(localStorage.getItem("comments_" + hobby)) || [];

    list = list.filter(c => c.id !== id);

    localStorage.setItem("comments_" + hobby, JSON.stringify(list));

    loadComments();
}


// ---- Editar comentário ---- //
function editComment(id, cardElement) {
    const textElement = cardElement.querySelector(".comment-text");

    // Proteção contra comentários quebrados
    if (!textElement) {
        console.warn("Comentário inválido: sem .comment-text");
        return;
    }

    const originalText = textElement.textContent;

    // Transformar o texto em input
    textElement.outerHTML = `
        <input type="text" class="edit-input text-sm" value="${originalText}" style="padding:4px; border-radius:6px;">
    `;

    // Substituir botão "Editar" por "Salvar"
    const editBtn = cardElement.querySelector(".edit-btn");
    editBtn.textContent = "Salvar";

    editBtn.onclick = () => saveEdit(id, cardElement);
}

// ---- Salvar edição ---- //
function saveEdit(id, cardElement) {
    const input = cardElement.querySelector(".edit-input");
    const newText = input.value.trim();

    if (!newText) return;

    let list = JSON.parse(localStorage.getItem("comments_" + hobby)) || [];

    list = list.map(c => {
        if (c.id === id) {
            return { ...c, text: newText };
        }
        return c;
    });

    localStorage.setItem("comments_" + hobby, JSON.stringify(list));

    loadComments();
}


// ---- Evento do botão ---- //
document.querySelector(".btn-blue").addEventListener("click", saveComment);


// ---- Carrega tudo ao abrir ---- //
loadComments();
