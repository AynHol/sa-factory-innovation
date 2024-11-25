import "./login.css";
import "../../reset.css";
import { hash } from "bcrypt";

document.getElementById("cadastrar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var cpf = document.getElementById("CPF") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if (password.value !== passwordConfirmation.value) {
        return;
    }

    const existentUser = await (window as any).bankAPI.findByCPF(cpf.value);
    console.log(existentUser)
    if(!!existentUser) {
        console.log("Já existe")
        return;
    }

    var user = {
        nome: nome.value,
        email: email.value,
        cpf: cpf.value,
        password: password.value
    };

    await (window as any).bankAPI.createUser(user)

});

document.getElementById("acessar").addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    const cpf = document.getElementById("CPF_login") as HTMLInputElement;
    const password = document.getElementById("password_login") as HTMLInputElement;

    const user = await (window as any).bankAPI.findByCPF(cpf.value)
    if(!user){
        console.log("Usuário não existe...")
        return;
    }

    const passwordConfirmation = {
        password: password.value,
        password_hash: user.password_hash as string
    }

    const validPassword = await (window as any).authAPI.hash(passwordConfirmation);

    if(!validPassword){
        console.log("credenciais incorretas...")
        return;
    }

    (window as any).navigateAPI.homePage(cpf.value);
})
