//Modulo interno para gerar ID
const sequence = {
    _id: 1,
    get id() {return this._id++}
}

//criando o objeto que receberá os valores
const musicas = {}


function salvarMusica(musica){
    //verificando se o ID do produto não está setado, e caso não, iremos seta-lo
    if(!musica.id){
        musica.id = sequence.id
    }

    musicas[musica.id] = musica
    return musica
}

//pegando o produto criado pelo ID 
function getMusica(id){
    return musicas.id || {} // Se o ID não for localizado, retornamos um objeto vazio
}

//retornar todos os valores
function getMusicas(){
    return Object.values(musicas)
}

//excluindo uma musica
function excluirMusica(id) {
    const musica = musicas[id]
    delete musicas[id]
    return musica
}

//Exportand as funções para serem usadas fora do arquivo
module.exports = { salvarMusica, getMusica, getMusicas, excluirMusica}