let group = document.getElementById('agroup')

fetch('https://apigenerator.dronahq.com/api/Nj9Um5-R/Filmes')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index]
            console.log(element)
            filmes(element)
        }
    });

function filmes(text) {
    let div = document.createElement("div")
    let Title = document.createElement("p");
    let Overview = document.createElement("p");
    let Nota = document.createElement("p");
    let Categoria = document.createElement("p"), cat

    Title.innerText = `Título: ${text["title"]}`
    Overview.innerText = `Descrição: ${text["overview"]}`
    Nota.innerText = `Nota: ${text["vote_average"]}`

    Cat = text["genre"].toString();
    Categoria.innerText = ("Categoria: ") + Cat.replace(",", ", ")

    div.classList.add("Teste")

    div.appendChild(Title)
    div.appendChild(Overview)
    div.appendChild(Nota)
    div.appendChild(Categoria)

    group.appendChild(div)
}

filmes()