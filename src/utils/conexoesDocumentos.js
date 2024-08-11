const conexoesDocumentos = [];

function encontrarConexao(nomeDocumento, nomeUsuario){
    return conexoesDocumentos.find((conexao) => {
        return (conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario);
     }); 
}

function  removerConexao(nomeDocumento, nomeUsuario){
    const indice = conexoesDocumentos.findIndex((conexao) => {
       return (conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario);
    });

    if(indice !== -1){
        conexoesDocumentos.splice(indice, 1);
    }
}

function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento){
    return conexoesDocumentos.filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export { adicionarConexao, obterUsuariosDocumento, removerConexao, encontrarConexao };