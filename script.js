/*
console.log('Caique')
console.info('Informação')
console.warn('aviso')
console.error('Erro')

console.table([
  { id: 1, tarefa: "Estudar JS" },
  { id: 2, tarefa: "Praticar código" }
]);

console.group("Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

console.time("Timer");

console.timeEnd("Timer");
*/

/*
var antigo = "Forma antiga de declarar variáveis";

let userName = "Carol";
userName = "Caique"; 

const API_URL = "https://api.example.com";

let texto = "Olá";                

let numero = 42;                  

let isCompleted = false;          

let semValor;                     

let nulo = null;                  

let uniqueId = Symbol("id");      

let bigNumero = 999999999999999999999999n; 
*/

/*
let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "Caique",
    email: "caique@gmail.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};
*/

/*
let tasks = [
  { id: 1, title: "Tarefa 1", completed: false },
  { id: 2, title: "Tarefa 2", completed: true }
];
*/

/*
let hoje = new Date();
let dataFutura = new Date("03-26-2025");
*/

/*
let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // true
*/

/*
String(42); // "42"
42 + "";  // "42"

Number("42"); // 42
parseInt("42.9");  // 42
parseFloat("42.9"); // 42.9

Boolean("texto"); // true
Boolean("");       // false
*/

/*
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
*/

/*
let contador = 0;
console.log(++contador); // 1 (pré-incremento)
console.log(contador++); // 1 (pós-incremento, agora contador = 2)
*/

/*
let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)

console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)

let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

let valor = null;
let resultado = valor ?? "Valor padrão"; // "Valor padrão"

let usuario = { nome: "Caique" };
console.log(usuario?.endereco?.rua); // undefined

let arr1 = [1,2];
let arr2 = [3,4];
let combinado = [...arr1, ...arr2]; // [1,2,3,4]
*/