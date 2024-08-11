import { definirCookie } from "../utils/cookie.js";

const socket = io();

function  emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (usuario, tokenJWT) => {
    definirCookie("tokenJwt", tokenJWT);
    alert(`Bem-Vindo(a) ${usuario}`);
    window.location.href = "/";
});

socket.on("autenticacao_erro", () => {
    alert("Senha incorreta, tente novamente");
});

socket.on("usuario_nao_existe", () => {
    alert("o Usuário mencionado não existe!");
})

export { emitirAutenticarUsuario } ;