import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { obterCookie, removerCookie } from "./utils/cookie.js";

const tokenJWT = obterCookie("tokenJwt");
if (!tokenJWT) {
  alert("Não foi possível recuperar o token. Você será redirecionado para a página de login.");
  window.location.href = "/login/index.html";
}

const listaDocumentos = document.getElementById("lista-documentos");
const formulario = document.getElementById("form-adiciona-documento");
const input = document.getElementById("input-documento");
const botaoLogout = document.getElementById("botao-logout");

botaoLogout.addEventListener("click", () => {
  removerCookie("tokenJwt");
  alert("Usuário deslocado com sucesso!");
  window.location.href =  "/login/index.html";
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    emitirAdicionarDocumento(input.value);
    input.value = "";
});

function inserirLinkDocumento(nome){
    listaDocumentos.innerHTML += `
      <a href="/documento/index.html?nome=${nome}" class="list-group-item list-group-item-action" id="documento-${nome}">
        ${nome}
      </a>
    `;
}

function removerLinkDocumento(nomeDocumento){
  const documento = document.getElementById(`documento-${nomeDocumento}`);
  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };