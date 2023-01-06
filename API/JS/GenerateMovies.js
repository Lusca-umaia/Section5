const urlMovies = fetch('https://apigenerator.dronahq.com/api/Nj9Um5-R/Filmes')
const urlGenre = fetch('https://apigenerator.dronahq.com/api/Dd1QK1In/genre')
let group = document.getElementById('agroup')

async function createBoxMovies() {
    const responsMovies = await urlMovies
    const dataMovies = await responsMovies.json()

    const responsGenre = await urlGenre
    const dataGenre = await responsGenre.json()

    function generateBox(elem) {
        let div = document.createElement("div")
        let Title = document.createElement("p");
        let Overview = document.createElement("p");
        let Nota = document.createElement("p");
        let Category = document.createElement("p"), genre, genreArray = []

        Title.innerText = `Título: ${elem["title"]}`
        Overview.innerText = `Descrição: ${elem["overview"]}`
        Nota.innerText = `Nota: ${elem["vote_average"]}`

        genre = elem["genre"].forEach((item) => {
            dataGenre.forEach((elementt) => {
                if (elementt.id == item) {
                    genreArray.push(elementt.name)
                }
            })
        })

        genreArray = genreArray.toString();
        Category.innerText = ("Categoria: ") + genreArray.replace(",", ", ")

        div.classList.add("Teste")

        div.appendChild(Title)
        div.appendChild(Overview)
        div.appendChild(Nota)
        div.appendChild(Category)

        group.appendChild(div)
    }

    for (let index = 0; index < dataMovies.length; index++) {
        const element = dataMovies[index]
        generateBox(element)
    }
}
createBoxMovies()
