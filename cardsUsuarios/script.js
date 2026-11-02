const usuarios = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", address: { city: "Gwenborough" }, company: { name: "Romaguera-Crona" } },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", address: { city: "Wisokyburgh" }, company: { name: "Deckow-Crist" } },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", address: { city: "McKenziehaven" }, company: { name: "Romaguera-Jacobson" } },
  { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", address: { city: "South Elvis" }, company: { name: "Robel-Corkery" } }
];


const cards = document.getElementById("cards");


for (const usuario of usuarios) {
  const card = document.createElement("div");
  card.className = "card";


  const nome = document.createElement("h2");
  nome.textContent = usuario.name;
  card.appendChild(nome);


  const email = document.createElement("p");
  email.textContent = "E-mail: " + usuario.email;
  card.appendChild(email);


  const cidade = document.createElement("p");
  cidade.textContent = "Cidade: " + usuario.address.city;
  card.appendChild(cidade);


  const empresa = document.createElement("p");
  empresa.textContent = "Empresa: " + usuario.company.name;
  card.appendChild(empresa);


  cards.appendChild(card);
}


document.getElementById("total").textContent = "Total de usuários: " + usuarios.length;
