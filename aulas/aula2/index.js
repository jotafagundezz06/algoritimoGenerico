const livros = require('./listaLivros'); // chama o array de lista livros
let maisBarato = 0; // variavel que vai armazenar o livro mais barato 

for (let atual = 0 ; atual < livros.length; atual++)  { // variavel atual começa com 0, se atual for menor que o ultimo livro, adicona atual 
  if (livros[atual].valor < livros[maisBarato].valor ) { // se o livro atual for menor que o livro mais barato
    maisBarato = atual ; // a varivel mais barato armazena o valor atual
  }
  
}

console.log(`O livro mais barato é ${livros[maisBarato].valor} e o titulo é ${livros[maisBarato].titulo}`);