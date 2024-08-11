import jwt from "jsonwebtoken";

function autorizarAcesso(socket, next) {
    const tokenJWT = socket.handshake.auth.token;

    try {
        const payloadToken = jwt.verify(tokenJWT, process.env.SEGREDO_JWT);

        socket.emit("autorizacao_sucesso", payloadToken);
        next();
    } catch(erro){
        next(erro);
    }
}

export default autorizarAcesso;