//https://apiprevmet3.inmet.gov.br/previsao/4314100
const axios = require('axios').default;

async function main() {

    try {
        let codeCity = "4314100"
        let request = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${codeCity}`)
        await console.log("Previsão para Passo Fundo: ")
        console.log("Temperatura Mínima: " + request.data['4314100']["10/03/2022"].noite.temp_min)
        console.log("Temperatura Máxima: " + request.data['4314100']["10/03/2022"].noite.temp_max)

    } catch (error) {
        console.log(error)
    }

}

main()