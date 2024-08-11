import { encontrarUsuario } from "../db/usuariosDB.js";
import autencarUsuario from "../utils/autenticarUsuario.js";
import gerarJWT from "../utils/gerarJWT.js";

function registrarEventosLogin(socket, io){
    socket.on("autenticar_usuario", async ({usuario, senha}) => {
        const usuarioLogado = await encontrarUsuario(usuario);

        if(usuarioLogado){
            const autenticado = autencarUsuario(senha, usuarioLogado);

            if(autenticado){
                const tokenJWT = gerarJWT({nomeUsuario: usuario});

                socket.emit("autenticacao_sucesso", usuario, tokenJWT);
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_existe");
        }
    });
}

export default registrarEventosLogin;