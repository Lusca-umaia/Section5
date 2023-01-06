const urlGenre = fetch('https://apigenerator.dronahq.com/api/Dd1QK1In/genre')

async function searchGenre(array) {
    const reponseGenre = await urlGenre
    const dataGenre = await reponseGenre.json()
    console.log(dataGenre)
    for (let index = 0; index < array.length; index++) {
        dataGenre.forEach((item) => {
            if (item.id == array[index]) {
                console.log(item.name)
            }
        })
    }
}

searchGenre([1, 12, 80, 99])
