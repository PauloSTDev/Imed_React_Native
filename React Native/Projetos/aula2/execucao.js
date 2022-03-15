const escreveInter = () => {

    return new Promise((resolve, reject) => {
        // request
        setTimeout(() => {
            resolve("Internacional")
        }, 3000);

    })
}

const escreveGremio = () => {
    return "Grêmio"
}

async function main() {
    
    try {
        console.log(await escreveInter())
        console.log(escreveGremio())
    } catch (error) {
        console.log("Ops, algo deu errado!")
    }
}
main()
