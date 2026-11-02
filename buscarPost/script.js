const posts = [
  { userId: 1, id: 1, title: "Primeiro post", body: "Aprendendo a manipular o DOM." },
  { userId: 1, id: 2, title: "Segundo post", body: "Arrays de objetos são parecidos com o JSON de uma API." },
  { userId: 2, id: 3, title: "Terceiro post", body: "Em breve vamos buscar estes dados no servidor." },
  { userId: 2, id: 4, title: "Quarto post", body: "O método find devolve o primeiro item encontrado." },
  { userId: 3, id: 5, title: "Quinto post", body: "Se nada for encontrado, find devolve undefined." }
];

const campo = document.getElementById("idPost");
const resultado = document.getElementById("resultado");

document.getElementById("buscar").addEventListener("click", function () {
  resultado.textContent = "";
  resultado.className = "";

  if (campo.value === "") {
    resultado.textContent = "Digite um ID.";
    return;
  }

  const id = Number(campo.value);
  const post = posts.find(function (post) {
    return post.id === id;
  });

  if (post === undefined) {
    resultado.className = "erro";
    resultado.textContent = "Post não encontrado (ID " + campo.value + "). Os IDs válidos vão de 1 a 5.";
    return;
  }

  const titulo = document.createElement("h2");
  titulo.textContent = post.title;
  resultado.appendChild(titulo);

  const corpo = document.createElement("p");
  corpo.textContent = post.body;
  resultado.appendChild(corpo);
});
