const registerForm = document.querySelector("#registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = registerForm.name.value.trim();
        const email = registerForm.email.value.trim();
        const password = registerForm.password.value.trim();
        const confirm = registerForm.confirm.value.trim();

        if (password !== confirm) {
            alert("As senhas não coincidem!");
            return;
        }

        // Carrega usuários existentes
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verifica se email já existe
        const emailExists = users.some(u => u.email === email);
        if (emailExists) {
            alert("Este email já está cadastrado!");
            return;
        }

        // Cria novo usuário
        const newUser = {
            name,
            email,
            password
        };

        // Salva no array
        users.push(newUser);

        // Armazena tudo novamente
        localStorage.setItem("users", JSON.stringify(users));

        alert("Conta criada com sucesso!");
        window.location.href = "/login";
    });
}
