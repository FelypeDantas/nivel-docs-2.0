import { emitirDocumento, emitirExcluirDocumento, emitirTextoEditor } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
const listaUsuarios = document.getElementById("usuarios-conectados");
const botaoDownloadPDF = document.getElementById("pdf-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

document.addEventListener('DOMContentLoaded', () => {
    tinymce.init({
        selector: '#editor-texto',
        plugins: 'advlist autolink lists link image charmap preview anchor pagebreak',
        toolbar_mode: 'floating',
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        menubar: false,
      setup: (editor) => {
            // Adicione o evento keyup após o editor estar pronto
            editor.on('keyup', () => {
                const texto = editor.getContent();
                emitirTextoEditor({
                    texto,
                    nomeDocumento,
                });
            });
        }
    });
});

function tratarAutorizacaoSucesso(payloadToken) {
    emitirDocumento({ nomeDocumento, nomeUsuario: payloadToken.nomeUsuario });
}

function atualizarInterfacesUsuarios(usuariosNoDocumento) {
    listaUsuarios.innerHTML = "";

    usuariosNoDocumento.forEach((usuario) => {
        listaUsuarios.innerHTML += `
             <li class="list-group-item">${usuario}</li>
        `
    });
}

// tinymce.get('editor-texto').on('keyup', () => {
//     const texto = tinymce.get('editor-texto').getContent();
//     emitirTextoEditor({
//         texto,
//         nomeDocumento,
//     });
// });


function atualizaTextoeditor(texto) {
    tinymce.get('editor-texto').setContent(texto);
}

function alertarEredirecionar(nome) {
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} foi removido com sucesso!`);
        window.location.href = "/";
    }
}

botaoDownloadPDF.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = tinymce.get('editor-texto').getContent({ format: 'text' });

    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    const lines = doc.splitTextToSize(content, pageWidth - 2 * margin);

    let y = margin;

    lines.forEach(line => {
        
        if (y + 10 > pageHeight - margin) {
          doc.addPage();
          y = margin; 
        }
    
        doc.text(line, margin, y);
        y += 10; 
      });

    doc.save(`${nomeDocumento}.pdf`);
});

botaoExcluir.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja excluir este documento?")) {
        if (nomeDocumento) {
            emitirExcluirDocumento(nomeDocumento);
        }
    }
});

export { atualizaTextoeditor, alertarEredirecionar, tratarAutorizacaoSucesso, atualizarInterfacesUsuarios };