# Desafio - Plus Minus - HackerRank

### O problema consiste em calcular as proporções de elementos positivos, negativos e nulos em um array de inteiros e imprimir o valor decimal de cada fração com 6 casas decimais.

## Solução

  1. A função recebe um array de inteiros como parâmetro.
  2. Três variáveis são declaradas para armazenar o número de elementos positivos, negativos e zeros do array.
  3. A função itera através do array usando um loop for.
  4. Para cada elemento do array, um condicional é usado para determinar se o elemento é positivo, negativo ou zero, e incrementar a variável apropriada.
  5. As proporções de elementos positivos, negativos e zeros são calculadas dividindo o número de ocorrências de cada tipo pelo comprimento do array.
  6. As proporções são convertidas em strings com seis casas decimais usando o método toFixed().
  7. As proporções são concatenadas em uma única string separada por novas linhas e armazenadas em uma variável chamada ratios.
  8. A função retorna a string ratios.

<code>
  function plusMinus(arr) {
      // Write your code here
      let positivos = 0;
      let zeros = 0;
      let negativos = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          positivos += 1;
        } else if (arr[i] == 0) {
          zeros += 1;
        } else {
          negativos += 1;
        }
      }
      const resultadoPositivos = positivos / arr.length;
      const resultadoNegativos = negativos / arr.length;
      const resultadoZeros = zeros / arr.length;

      const ratios =
        parseFloat(resultadoPositivos.toFixed(6)) +
        "\n" +
        parseFloat(resultadoNegativos.toFixed(6)) +
        "\n" +
        parseFloat(resultadoZeros.toFixed(6));
  
        console.log(ratios)
   }
</code>

## Link perfil Hacker Rank 
https://www.hackerrank.com/gabriellaurenti1

## Tecnologia
<div style="display: inline_block"><br>
  <img align="center" alt="Gabriel-HTML" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
</div>
