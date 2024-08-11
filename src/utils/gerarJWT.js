import jwt from "jsonwebtoken";

function gerarJWT(payload){
    const tokenJWT = jwt.sign(payload, process.env.SEGREDO_JWT, {
        expiresIn: "1h"
    });

    return tokenJWT;
}

export default gerarJWT;