const express = require("express");
const app = express();
const routes = express.Router();
const cors = require("cors");
app.use(cors());
app.use(routes);
const fs = require("fs");
 
let listaAlunos = JSON.parse(fs.readFileSync("./alunos.json"));

routes.get("/login", function(req, res) {
  const registroAluno = req.query.ra;
  const senhaAluno = req.query.senha;

  const retorno = verificaLogin(registroAluno, senhaAluno);
  res.json(retorno)
})

// Se o RA informado é válido
// Se a senha informada é válida 
// Se o RA ou a Senha não foram informados
function verificaLogin(registroAluno, senhaAluno) {
  let encontrou = false;

  if (registroAluno === '' || senhaAluno === '') {
    return { valido: false, mensagem: 'INFORME OS CAMPOS OBRIGATÓRIOS' }
  }
  
  for (let i=0; i < listaAlunos.length; i++)  {
    let ra = listaAlunos[i];
    if (ra.raAluno === registroAluno && ra.senha === senhaAluno) {
      encontrou = true;
      break;
    }
  }

  if (encontrou) {
    return { valido: true, mensagem: 'ACESSO LIBERADO' }
  } 
  else {
    return { valido: false, mensagem: 'ALUNO NÃO ENCONTRADO' }
  }
}

app.listen(2021, function() {
  console.log('Servidor inicializado!');
})

module.exports = {
  verificaLogin
}
