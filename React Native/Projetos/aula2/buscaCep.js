const axios = require('axios').default;


async function main() {

    try {
        let cep = "99560000"
        let request = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(request.data.localidade)

    } catch (error) {
        console.log(error)
    }

}

main()
