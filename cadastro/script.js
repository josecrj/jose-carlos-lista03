const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const dados = new FormData(formulario);
  const objeto = {};


  for (const [campo, valor] of dados) {
    objeto[campo] = valor;
  }

  document.getElementById("json").textContent = JSON.stringify(objeto, null, 2);

  const linha = document.createElement("tr");
  const valores = [objeto.nome, objeto.email, objeto.idade, objeto.curso];

  for (const valor of valores) {
    const coluna = document.createElement("td");
    coluna.textContent = valor;
    linha.appendChild(coluna);
  }

  document.getElementById("cadastros").appendChild(linha);
});
