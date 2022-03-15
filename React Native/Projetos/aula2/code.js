const axios = require("axios").default;

dados = {}
axios.get("https://swapi.dev/api/people/")
.then((request) => {
    objeto = request.data.results
    dados = JSON.stringify(request.data.results)
    console.log(objeto);

})
.catch((erro) =>{
    console.log(erro);
})