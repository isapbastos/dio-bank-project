// //var a = 'a';
// //let b = 'b';
// //const c = 'c';
// let b: string = 'b';
// let n: number = 2;
// let x: boolean = true;

// let m: any = 2;
// m = 'Nath';
// m = false;

// interface Pessoa {
// 	nome: string,
// 	idade: number,
// 	profissao?: string
// }

// const pessoa: Pessoa = {
// 	nome: 'Nath',
// 	idade: 32
// }

// const outraPessoa: Pessoa = {
// 	nome: 'Paulo',
// 	idade: 25,
// 	profissao: 'Desenvolvedor'
// }

// const arryPessoa: Array<Pessoa> = [//ou Pessoa[]
// 	pessoa,
// 	outraPessoa
// ]

// const arrayNum: number[] = [
// 	1, 2, 3
// ]

// const arrayString: Array<string> = [
// 	'1', '2', '3'
// ]

//if/else
// const num: number = 15;

// if (num > 15) {
// 	console.log('Num maior que 15');
// } else if (num == 15) {
// 	console.log('Num igual a 15');
// } else {
// 	console.log('Num menor que 15');
// }

// const typeUser = {
// 	admin: 'Seja bem-vindo, admin',
// 	student: 'Você é um estudante',
// 	viewer: 'Você pode visualizar'
// }

// function validateUser(user: string) {
// 	console.log(typeUser[user as keyof typeof typeUser]);
// }

// const usuario = 'admin';

// validateUser(usuario);
// validateUser('viewer');

//for
// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// }
//while
// let n = 2;
// while (n < 6) {
// 	console.log(n);
// 	n++;
// }

const array: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ['a', 'b', 'c'];
// console.log(array[0]);

// console.log(array.length);

// console.log("Array original", array);
//array.push(5);
// array.pop();
// console.log("Array depois: ", array);

let buscaNum = array.find(num => num > 5);
array.forEach(num => {
	if (num > 2 && num % 2 == 0) {
		console.log(num * 2);
	}
});

array.map(num => console.log(num));//map pode ser usado com funções assíncronas








