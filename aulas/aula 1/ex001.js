const precosLivros = [25, 15, 30, 50, 45, 20]; // constante que vai armazenar os valores

let maisBarato = 0; // variavel que vai armazenar o livro mais barato 

for (let atual = 0 ; atual < precosLivros.length; atual++)  { // variavel atual começa com 0, se atual for menor que o ultimo livro, adicona atual 
  if (precosLivros[atual] < precosLivros[maisBarato] ) { // se o livro atual for menor que o livro mais barato
    maisBarato = atual ; // a varivel mais barato armazena o valor atual
  }
  
}

console.log(`O livro mais barato é ${precosLivros[maisBarato]}`);