## Lógica aplicada - Arrays, Objetos e Métodos.

``O conteúdo aborbado na semana 04 teve ênfase em Arrays, Objetos e Métodos, cada detalhe da aula foi de suma importância para a resolução das atividades.``

 ### **Exercício proposto da semana 04:**
 > Criar um sistema que armazena informações de livros para que seja possível gerenciar:</br>
  livros já lidos e os livros que estão na nossa listinha de desejos.
  
  **Resolução:**
  > Passo a passo: 
  
  1) Iniciar o projeto no terminal seguindo os seguintes passos:
  
- Criar um arquivo README.md
- Criar um arquivo app.js
- Criar um arquivo database.js
- Inicializar o npm :  npm init -y
- Criar o script de start: 
- Criar o script start no package.json:
  "scripts": {
    "start": "nodemon app.js"
  }
- Criar o .gitignore (node_modules)
- instalar as dependências nodemon e readline-sync: npm i --save readline-sync nodemon


 2) Dentro do arquivo database.js, criar um array que armazena dados dos livros:
  
```js
const livros = [
    {
        titulo: 'Emma - Jane Austen',
        categoria:'Romance',
        paginas:332,
        recomenda:true,
        leu:true
    },
    {
        titulo: 'Helena - Machado de Assis',
        categoria:'Romance',
        paginas:255,
        recomenda:true,
        leu:true
    },
    {
        titulo: 'Admirável mundo novo - Aldous Huxley',
        categoria:'Distopia',
        paginas:258,
        recomenda:true,
        leu:false
    },
    {
        titulo: 'A república - Platão',
        categoria:'Filosofia',
        paginas:496,
        recomenda:true,
        leu:true
    },
    {
        titulo: 'O jogador - Fiódor Dostóievski',
        categoria:'Romance',
        paginas:232,
        recomenda:true,
        leu:true
    },
    {
        titulo: 'Ressureição - Lev Tolstoi',
        categoria:'Romance',
        paginas:382,
        recomenda:true,
        leu:false
    }
]
module.exports = livros
```
`É necessário exportar o array de objetos para o arquivo app.js.`

3) No arquivo app.js desenvolver a lógica para o comportamento abaixo: 

  - Escolher livros para ler
  - Recomendar categorias 
  - Escolher categorias 
  - Acessar lista de desejo
  - Listar livros cadastrados, ordenados de forma crescente por quantidade de páginas.

```js

const livros = require('./database')

livros.sort((a,b) => a.paginas - b.paginas)

const pegarInput = require('readline-sync')

const buscarPorCategoria = pegarInput.question(
    'Deseja escolher livros? (S/N)')

if(buscarPorCategoria.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias recomendadas:')
    console.log('Filosofia' + ',', 'Romance')

    const qualLivro = pegarInput.question('Qual categoria voce escolhe?')

    const porCategorias = livros.filter(livro => livro.categoria === qualLivro && 
    livro.leu === true || livro.categoria === 'Filosofia')

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

```
##

**Considerações finais:** </br>
``Este projeto foi muito satisfatório. Pela primeira vez senti que o computador estava me respondendo de uma forma mais direta. 
Tive algumas dificuldades com os módulos, aliás, é um assunto completamente novo para mim. Mas reassistindo as aulas das Profª Simara, pude crer que com paciência
e resiliência, podemos conseguir muita coisa.`` </br>

*"Mas o que realmente importa é o código rodar no terminal"*

<img alt="programador" height="150" width="280"  src="https://thumbs.gfycat.com/GlaringAccomplishedAfricanmolesnake-small.gif">

 #### Connect with me:
 <div>
  <a href="https://www.linkedin.com/in/dannyeli-silva-47152115b/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://www.instagram.com/dannyelic/?hl=pt-br" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>
