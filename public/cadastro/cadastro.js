import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = formCadastro["input-usuario"].value;
    const senha = formCadastro["input-senha"].value;

    emitirCadastrarUsuario({ usuario, senha } );
});
