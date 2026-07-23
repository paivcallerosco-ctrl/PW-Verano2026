var nombre ="Iván";
const edad = 20;
let promedio = 9.5;


if(true){
    var libro = "libro 1";
    let animal = "perro";
    animal = 5;
    //console.log(animal);

}
/*
console.log(libro);
console.log(animal);
*/

/*
let n1 = parseInt(prompt("Ingrese un número"));
let n2 = Number(prompt("Ingrese un número"));
console.log(n1);
console.log(n2);

let suma = n1 + n2;
console.log(suma);
*/

/*
let suma = 10 + 5;
let resta = 10 - 5;
let multiplicación = 10 * 5;
let division = 10 / 5;
let residuo = 10 % 5;
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicación);
console.log("División:", division);
console.log("Residuo:", residuo);
*/

/*
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 3);
*/

/*
let cal = 85;
if(cal >= 85){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}


let cal = 85;
if(cal >= 90){
    console.log("Excelente");
}else if(cal >= 70){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

let tabla = 5;
for(let i = 1; i<=5; i++){
    //console.log("Iteración:", i);
    console.log(`${tabla} x ${i} = ${tabla*i}`);
    console.log(tabla+" x "+i+" = "+tabla*i);
}


let contador = 1;
while(contador <= 5){
    console.log(contador);
    contador++;
}


function saludar(nombre){
    console.log("Hola " + nombre);    
}

saludar("Ivan");


function aleatorio(){
    let n = Math.floor(Math.random()*100)+1;
    console.log(n);    
}
aleatorio();


let numeros = [5, 2];
console.log(numeros);
numeros.push(20);
console.log(numeros);
console.log(numeros[2]);

numeros.push(20);
numeros.push(8);
numeros.push(53);

for(let i=0; i < numeros.length; i++){
    console.log(numeros(i));
}


let persona={
    nombre: "Iván",
    edad: 20,
    cd: "Tepic"
}

persona.nombre = "Carlos"
persona.carrera = "ISC";
console.log(persona);
*/

let numeros = [1, 2, 3, 4, 5];
let dobles = numeros.forEach(numero => {
    //console.log(numero);
    return numero*2;
});








