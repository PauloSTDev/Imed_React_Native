const axios = require("axios").default;

axios.get("https://swapi.dev/api/people/")
.then((request) => {
    console.log(request.data.results.name)
})
.catch((erro) =>{
    console.log(erro);
})

