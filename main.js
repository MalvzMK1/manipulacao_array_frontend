'use strict'

import { showArray } from "./showArray.js";

const numbers = [33, 11, 2, 10, 5, 777];

// MAP - percorre o array e retorna um array do mesmo tamanho modificado ou não
// Sintaxe - array.map(callback)
// Parametros do callback
// 1 - elemento
// 2 - indice
// 3 - array

// aplicando um desconto de 2 reais no array
const discount2 = (number) => number - 2;
const numbersDiscount = numbers.map(discount2);

// FILTER - percorre o array aplicando um callback e retorna um array de mesmo tamanho ou não
// Sintaxe - array.filter(callback)
// Parametros do callback
// 1 - elemento
// 2 - indice
// 3 - array

// Filtrando os numeros menores que vinte
const minor20 = (number) => number < 20;
const numbersLess20 = numbers.filter(minor20);

// REDUCE - percorre o array aplicando um callback e retorna a juncao dos elementos do array
// Sintaxe - array.reduce(callback)
// Parametros do callback
// 1 - acumulador
// 2 - elemento
// 3 - indice
// 4 - array

// Somar todos os numeros
const soma = (a, b) => a + b;
const totalValue = numbers.reduce(soma, 0);

// Exercicios
//      1 - Adicionar 100 em cada elemento
//      2 - Somente os valores pares
//      3 - Total dos valores com desconto de 4
//      4 - Array com todos os elementos impares somando 21

const add100 = (number) => number + 100;
const valuesPlus100 = numbers.map(add100);

const oddOrEven = (number) => number % 2 == 0;
const onlyEvenNumbers = numbers.filter(oddOrEven);

const discount4 = (number) => number - (number * 0.04);
const percentualDiscount = numbers.map(discount4);

const findOdd = (number) => number % 2 != 0;
const add21 = (number) => number + 21;
const oddArray = (numbers.filter(findOdd));
const oddPlus21Array = oddArray.map(add21);

showArray(valuesPlus100, 'main', 'Somando 100');
showArray(onlyEvenNumbers, 'main', 'Somente os pares');
showArray(percentualDiscount, 'main', 'Desconto de 4%');
showArray(oddPlus21Array, 'main', 'Impares mais 21');
showArray(numbers, 'main', 'Todos os numeros');
showArray(numbersDiscount, 'main', 'Descontos');
showArray(numbersLess20, 'main', 'Menores que 20');
showArray([totalValue], 'main', 'Soma dos numeros');
showArray(numbers, 'main', 'Todos os numeros');
showArray(numbers, 'main', 'Todos os numeros');