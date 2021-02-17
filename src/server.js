const port = 3000;

const express = require ('express')
const app = express()

const bodyParser = require('body-parser')
const bd = require('./bd')


//transformando os dados recebidos para objeto
app.use(bodyParser.urlencoded({ extended: true }))

//obtendo a lista de músicas completa
app.get('/musicas', (req, res, next) => {
   res.send(bd.getMusicas()) 
})

//obtendo uma música pelo seu ID
app.get('/musicas/:id', (req, res, next) => {
    res.send(bd.getMusica(req.params.id)) 
 })

 //Salvando uma música com o método POST, criando os atributos que serão passados ao objeto 
 app.post('/musicas', (req, res, next) => {
     const musica = bd.salvarMusica({
         nome: req.body.nome,
         ano: req.body.ano,
         projeto: req.body.projeto,
         letrista: req.body.letrista
     })
     res.send(musica) //Aqui é onde geramos o Json
 })

//Para atualizar dados
app.put('/musicas/:id', (req, res, next) => {
    const musica = bd.salvarMusica({
        id: req.params.id,
        nome: req.body.nome,
        ano: req.body.ano,
        projeto: req.body.projeto,
        letrista: req.body.letrista
    })
    res.send(musica)
})

//removendo músicas
app.delete('/musicas/:id', (req, res, next) => {
    const musica = bd.excluirMusica(req.params.id)
    res.send(musica)
})

app.listen(port, () => {
    console.log(`servidor sendo executado na porta ${port}.`)
})


//dados de teste
/*nome: The grave calls our names
ano: 2018
projeto: Dakhmas
letrista: Ana Spinetti*/
