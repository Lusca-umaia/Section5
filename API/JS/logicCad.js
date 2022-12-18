let inputChe = document.getElementsByClassName('inputChe')
let submit = document.getElementById('enviar')
let descricao = document.getElementById('descricao')
let titulo = document.getElementById('titulo')
let nota = document.getElementById('nota')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    if (titulo.value != "" && descricao.value != "" && isNaN(nota.value) == false) {
        let array = []

        for (let index = 0; index < inputChe.length; index++) {
            if (inputChe[index].checked) {
                array.push(inputChe[index].value)
            }
        }

        if (array.length == 0) {
            array.push("outro")
        }

        fetch('https://apigenerator.dronahq.com/api/Nj9Um5-R/Filmes',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    "title": titulo.value,
                    "overview": descricao.value,
                    "genre": array,
                    "vote_average": parseInt(nota.value)
                }),
            })
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                console.log(data)
            });
    }

    else {
        alert("Preencha todos os valores")
    }
})

