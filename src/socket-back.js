import "dotenv/config";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import io from "./servidor.js";
import autorizarAcesso from "./middlewares/autorizarAcesso.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarAcesso);

nspUsuarios.on("connection", (socket) => {
    registrarEventosInicio(socket, nspUsuarios);
    registrarEventosDocumento(socket, nspUsuarios);
});

io.of("/").on("connection", (socket) => {
    registrarEventosCadastro(socket, io);
    registrarEventosLogin(socket, io);
});
