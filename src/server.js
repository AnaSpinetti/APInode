const express = require ('express');
const app = express()

const port = 3000;

app.get('/musicas', (req, res, nex) => {
    res.send({nome: 'the grave calls our names', ano: '2018', projeto:'dakhmas'})
})

app.listen(port, () => {
    console.log(`servidor sendo executado na porta ${port}.`)
})
