const meuPrimeiroArray =
    [
        { nome: 'alan', idade: 33, url: 'www.nome.com/imagem' },
        { nome: 'Daniel', idade: 20, url: 'www.nome.com/imagem' },
        { nome: 'Gael', idade: 1, url: 'www.nome.com/imagem' },
        { nome: 'Fabio', idade: 20, url: 'www.nome.com/imagem' },
        { nome: 'Martins', idade: 22, url: 'www.nome.com/imagem' }
    ]
// console.log(meuPrimeiroArray);

// for (let i = 0; i < meuPrimeiroArray.length ; i++) {
//     console.log(meuPrimeiroArray[i]);
// }

//const res = meuPrimeiroArray.map((el) => { console.log(meuPrimeiroArray)})

// const res = meuPrimeiroArray.map((el) => {
//     console.log(el.idade * 2)
// })

//filter

//reducer 


// let array1 = ['branco', 10, 20, 30, null];

// let array2 = ['verde', 40, 50, 60, undefined];

// array1 = array1.concat(array2);

// console.log(array1);

// var array1 = ['branco', 10, 20, 30];

// array1 = array1.join('-');

// console.log(array1);

// const  array1 = ['branco', 10, 20, 30];

// array1.push('novo elemento');
// array1.push('novo 2');
// array1.push('novo 3');

// console.log(array1);

// const array1 = ['branco', 10, 20, 30, "novo elemento"];

// array1.pop();
// array1.pop();

// console.log(array1);

// const array1 = ['branco', 10, 20, 30, "novo elemento"];

// array1.shift();

// console.log(array1);


// const array1 = ['branco', 10, 20, 30, "novo elemento"];
// const  novoArray = array1.slice(1,3).join('---');
// console.log(novoArray);

// const array1 = ['branco', 10, 20, 30, "novo elemento"];

// array1.splice(1,2, {});

// console.log(array1);

const  array1 = ['branco', 10, 20, 30, "novo elemento"];

array1.reverse();

console.log(array1);


01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. 

02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1

04. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor.
Ao final, exiba o array e o array ao contrário (generalização do script anterior).


05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

06. Crie uma função que recebe um vetor e um número.
Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

07. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.

08. Faça o mesmo do exercício anterior, mas com fatorial.
Fatorial de 0: 0! = '
Fatorial de 1: 1 x elemento0 = 1
Fatorial de 2: 2 x elemento1 = 2
Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
...
Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

08. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o jogador 1 ou jogador 2) que

09. Peça ao usuário uma quantidade de linhas e e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

