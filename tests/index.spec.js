const index = require("../server.js");

test("Informado um aluno válido deve retornar true", function() {
  const teste1 = index.verificaLogin('RA123', '123456');
  expect(teste1).toBe(true);
});

test("Informado outro aluno válido deve retornar true", function() {
  const teste1 = index.verificaLogin('RA567', '321');
  expect(teste1).toBe(true);
});

test("Informando um aluno válido e a senha incorreta, deve retornar false", function() {
  const teste2 = index.verificaLogin('RA123', 'nenhum');
  expect(teste2).toBe(false);
});

test("Informando um aluno e senha inxistente, deve retornar false", function(){
    const teste3 = index.verificaLogin('nenhum', 'nenhum');
    expect(teste3).toBe(false);
});

test("Enviar campos vazios, deve retornar false", function(){
    const teste4 = index.verificaLogin('', '');
    expect(teste4).toBe(false);
});

