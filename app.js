const livros = require('./database')

livros.sort((a,b) => a.paginas - b.paginas)

const pegarInput = require('readline-sync')

const buscarPorCategoria = pegarInput.question(
    'Deseja escolher livros? (S/N)')

if(buscarPorCategoria.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias recomendadas:')
    console.log('Filosofia' + ',', 'Romance')

    const qualLivro = pegarInput.question('Qual categoria voce escolhe?')

    const porCategorias = livros.filter(livro => livro.categoria === qualLivro && livro.leu === true || livro.categoria === 'Filosofia')

    console.log('Essas são as opções de livros lidos e recomendados:')
    console.log(porCategorias)

    const listaDeDesejos = pegarInput.question('Deseja acessar livros nao-lidos? (S/N)')

if(listaDeDesejos.toLocaleUpperCase() === 'S'){

    console.log('Essas são as opções de livros nao-lidos:')
    console.log((livros[2]))
    console.log((livros[4]))
}
else if(listaDeDesejos.toLocaleUpperCase() === 'N'){

    console.log('Estes são todos os livros cadastrados no sistema:')
    console.log(livros)
}

} else {
    console.log('Estes são todos os livros cadastrados no sistema:')
    console.log(livros)
}
