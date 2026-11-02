const posts = [
    { id: 1, title: "Introdução ao DOM" },
    { id: 2, title: "Eventos em JavaScript" },
    { id: 3, title: "O que é uma API?" }
];

const comentarios = [
    { postId: 1, id: 1, name: "Ana", email: "ana@email.com", body: "Explicação muito clara!" },
    { postId: 1, id: 2, name: "Bruno", email: "bruno@email.com", body: "Gostei do exemplo do getElementById." },
    { postId: 2, id: 3, name: "Carla", email: "carla@email.com", body: "addEventListener é bem melhor que onclick." },
    { postId: 3, id: 4, name: "Diego", email: "diego@email.com", body: "A analogia do garçom ajudou muito." },
    { postId: 3, id: 5, name: "Elisa", email: "elisa@email.com", body: "Quero testar o JSONPlaceholder!" },
    { postId: 3, id: 6, name: "Fábio", email: "fabio@email.com", body: "E o método POST, como funciona?" }
];



const selectPost = document.getElementById("post");


const areaComentarios = document.getElementById("comentarios");


const primeiraOpcao = document.createElement("option");

primeiraOpcao.value = "";
primeiraOpcao.innerHTML = "Selecione um post";

selectPost.appendChild(primeiraOpcao);



for (let i = 0; i < posts.length; i++) {

    const opcao = document.createElement("option");

    opcao.value = posts[i].id;

    opcao.innerHTML = posts[i].title;

    selectPost.appendChild(opcao);
}


selectPost.addEventListener("change", mostrarComentarios);


function mostrarComentarios() {

   
    areaComentarios.innerHTML = "";

    const postSelecionado = Number(selectPost.value);


   
    if (postSelecionado === 0) {
        return;
    }


    const comentariosDoPost = comentarios.filter(
        comentario => comentario.postId === postSelecionado
    );


    const titulo = document.createElement("h2");

    titulo.innerHTML =
        `Comentários (${comentariosDoPost.length})`;

    areaComentarios.appendChild(titulo);


    for (let i = 0; i < comentariosDoPost.length; i++) {

        const card = document.createElement("div");

        card.className = "comentario";

        card.innerHTML = `
            <h3>${comentariosDoPost[i].name}</h3>
            <p>E-mail: ${comentariosDoPost[i].email}</p>
            <p>${comentariosDoPost[i].body}</p>
        `;

        areaComentarios.appendChild(card);
    }
}
