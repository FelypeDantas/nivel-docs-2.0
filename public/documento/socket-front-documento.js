import { obterCookie } from "../utils/cookie.js";
import { alertarEredirecionar, atualizarInterfacesUsuarios, atualizaTextoeditor, tratarAutorizacaoSucesso } from "./documento.js";

const socket = io("/usuarios", {
    auth: {
        token: obterCookie("tokenJwt"),
    }
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on("connect_error", (erro) => {
    alert(erro);
    window.location.href = "/login/index.html";
});


function emitirDocumento(dadosEntrada){
    socket.emit("selecionar_documento", dadosEntrada, (texto) => {
        atualizaTextoeditor(texto);
    });
}

socket.on("usuario_ja_no_documento", () => {
    alert("Documento já aberto em outra página!");
    window.location.href = "/";
});

socket.on("usuarios_no_documento", atualizarInterfacesUsuarios);


function emitirTextoEditor(dados){
    socket.emit("texto_editor", dados);
}

function emitirExcluirDocumento(nome){
    socket.emit("excluir_documento", nome);
    window.location.href = "/";
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoeditor(texto);
});

socket.on("excluir-documento-sucesso", (nome) => {
    alertarEredirecionar(nome);
})

export { emitirTextoEditor, emitirDocumento, emitirExcluirDocumento };