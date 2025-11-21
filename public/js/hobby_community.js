const hobby_card = document.querySelectorAll('.hobby-card');
if (hobby_card) {
    hobby_card.forEach(card => {
        card.addEventListener('click', () => {
            const hobby = card.getAttribute('data-hobby');
            window.location.href = `/community?hobby=${hobby}`;
        });
    });
}

const searchInput = document.querySelector("#searchHobby");
const hobbyCards = document.querySelectorAll(".hobby-card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const term = searchInput.value.toLowerCase();

        hobbyCards.forEach(card => {
            const text = card.querySelector("span").textContent.toLowerCase();

            // Mostra ou esconde o card com base na busca
            card.style.display = text.includes(term) ? "flex" : "none";
        });
    });
}
    

window.addEventListener('load', () => {
    if (localStorage.getItem("logged") !== "true") {
        window.location.href = "/login";
    }
});