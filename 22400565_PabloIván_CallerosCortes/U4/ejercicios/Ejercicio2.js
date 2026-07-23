/*
Escribe un programa que genere dos números aleatorios y que escriba en
consola qué números se generaron. Además, el programa debera señalar si
los números son iguales, y encaso de que no lo sean, mostrará cuál es el
mayor
*/


function ejercicio1(){
    let n = Math.floor(Math.random()*100)+1;
    console.log(n); 
    let m = Math.floor(Math.random()*100)+1;
    console.log(m); 
    if(n === m){
        console.log("Son iguales");
    }else{
        console.log("No son iguales")
        if(n > m){
            console.log("El mayor es: "+ n);
        }else if(n < m){
            console.log("El mayor es: "+ m)
        }
    }
}
//ejercicio1();


/*
Escribe un programa que genere de forma continua números entre el 0 y el 5,
hasta que salga el número 0 
*/

function ejercicio2(){
    do{
        var n = Math.floor(Math.random()*6);
        console.log(n);  
    }while(n!=0);
}
//ejercicio2();

/*
Elabora un programa que genere un número aleatorio entre el número 2 y el 
10, y despues escriba la tabla de multiplicar del número generado
*/


function ejercicio3(){
    let n = Math.floor(Math.random()*9)+2;
    let tabla = n;
    console.log("Número generado: "+n);
    for(let i = 1; i<=10; i++){
    //console.log(`${tabla} x ${i} = ${tabla*i}`);
    console.log(tabla+" x "+i+" = "+tabla*i);
    }
}
//ejercicio3();

/*
Escribe un programa que solicite 10 números entre el 1 y el 100, y determine
cuántos de esos números son pares y cuántos impares.
*/


function ejercicio4(){
    let par=0;
    let impar=0;
    for(i = 1; i<=10; i++){
        let n = parseInt(prompt("Ingrese un número: "));
        //let par;
        if(n%2==0){
            console.log("Es par: "+n);
            par++;
        }else{
            console.log("Es impar: "+n);
            impar++;
        }
    }
    console.log("Pares: " + par);
    console.log("Impar: " + impar);
}
//ejercicio4();

//Ejercicio 5
function ejercicio5(){
    let ventas;
    let comision;

    do{
        ventas = parseFloat(prompt("Ingrese las ventas del empleado de 5000 a 10000"));
    }while(ventas < 5000 || ventas > 30000); //mientras de verdadero el ciclo se va ir repitiendo

    if(ventas < 10000){
        comision = ventas * 0.10;
    }else{
        comision = ventas * 0.15;
    }

    console.log("Tu comisión sera de: " + comision);
}
ejercicio5()


