const precosLivro = [ 25, 15, 30, 5, 2, 20];


let maisBarato = 0;

for (let atual = 0 ; atual < precosLivro.length; atual++){
  if(precosLivro[atual] < precosLivro[maisBarato]) {
    maisBarato = atual ;
  }

  console.log(`o livro mais barato custa ${precosLivro[maisBarato]}`);
};