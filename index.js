"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

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

  console.log(ratios);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
