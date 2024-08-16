## NivelDocs

<p> A primeira versão deste projeto foi criado em um curso da Alura sobre JavaScript com foco em protocolos de rede, o sitema pode ser descrevido como uma espécie de caderno digital, aonde você pode adicionar um documento e escrever neste, tem a opção de apagar o documento, e fazer PDF, possui um identificador nos documentos para mostrar quem está presente naquele documento atual.</p>
<p>O sistema possui vinculo a um banco de dados não relacional e possui criptografia nas senhas colocadas, ao nivel em que o que será mandado para o banco de dados, será a criptografia.</p>

### Alterações que fiz

<p> As minhas alterações pessoais se baseiam:</p>
<ul>
  <li>na geração de PDF: já que o sistema original como foi mostrado no curso não fazia.</li>
  <li>Editor de texto simples: Acrescentei o  tinymce para que pudesse editar o que for escrito no documento.</li>
  <li>Retirando o nodemon: Para a produção do código o instrutor do curso utilizou o nodemon e o comando "npm run dev" para subir o servidor, coloquei o npm start que é um comando próximo a idéia de produção</li>
  <li>Comando open: Acrescentei o comando open para que não precise pesquisar a porta no meu navegador.</li>
</ul>

### Pontos que procuro melhorar
<p> Percebi pontos a serem melhorados ao finalizar a aplicação e são esses:</p>
<ul>
  <li>Acrescento de imagem: Gostaria de acrescentar imagem da pessoa logada.</li>
  <li>Hospedagem: tentei subir na vercel, mas pelo motivo que acredito ser do site ser pesado, está dando um estouro de tempo até o momento.</li>
  <li>Bug ao abrir documento: ao abrir o documento pela primeira vez o texto não está aparecendo, o que me faz voltar a página inicial e voltar ao documento para recuperar, o motivo pode ser justamente uma aplicação pesada</li>
</ul>

### Ferramentas utilizadas para desenvolvimento

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![.env](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)
![nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![socket.io](https://img.shields.io/badge/Socket.io-010101.svg?style=for-the-badge&logo=socketdotio&logoColor=white)
![jsonwebtoken](https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white)
![express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
