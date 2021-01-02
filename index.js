const express = require("express")
const app = express()
const port = 8081

app.get('/', (req, res) => {
    res.send("Funcionando")
})

app.get('/jogar/:jogadaPlayer', (req, res) => {

    // Criando bot que jogará contra o client
    const jogadas = ['pedra', 'papel', 'tesoura']
    let jogadaBot = jogada(jogadas)

    function getRandom(max) {
        return Math.floor(Math.random() * max)
    }

    function jogada(jogadas) {
        return jogadas[getRandom(jogadas.length)]
    }

    if (req.params.jogadaPlayer == jogadaBot) {
        res.send('Empate')
    } else if ((req.params.jogadaPlayer == "pedra" && jogadaBot == "tesoura")
    || (req.params.jogadaPlayer == "papel" && jogadaBot == "pedra")
    || (req.params.jogadaPlayer == 'tesoura' && jogadaBot == 'papel')) {
        res.send(`Jogador jogou ${req.params.jogadaPlayer}, e computador jogou ${jogadaBot}, Venceu`)
    } else {
        res.send(`Jogador jogou ${req.params.jogadaPlayer}, e computador jogou ${jogadaBot}, Pedeu`)
    }
})


app.listen(port, () => {
    console.log(`Servidor ligado: http://localhost:${port}`)
})