const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm.email.value.trim();
        const password = loginForm.password.value.trim();

        // Carrega lista de usuários
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.length === 0) {
            alert("Nenhuma conta registrada!");
            return;
        }

        // Procura usuário com email correspondente
        const foundUser = users.find(u => u.email === email);

        if (!foundUser) {
            alert("Email não encontrado!");
            return;
        }

        if (foundUser.password !== password) {
            alert("Senha incorreta!");
            return;
        }

        // Salva usuário logado
        localStorage.setItem("loggedUser", JSON.stringify(foundUser));

        // Marca sessão como ativa
        localStorage.setItem("logged", "true");

        window.location.href = "/home";
    });
}
