const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const PORT = 3000;


/*
app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express")
})

app.get("/pagina", (req, res) => {
    res.send(`
        <style>
            h1 { color: red; }
        </style>
        <h1>Mi página</h1>
        <p>Creada con express</p>
    `)
})

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre);
})

//Ejercicio 1 Número par o impar
app.get("/E1/:numero", (req, res) => {
    const numero = req.params.numero;
    if(numero % 2 == 0){
        res.send("Es par");
    }else{
        res.send("Es impar");
    }
})

//Ejercicio 2 Mayor de edad
app.get("/E2/:edad", (req, res) => {
    const edad = req.params.numero;
    if(edad > 18){
        res.send("Eres mayor de edad");
    }else{
        res.send("Eres menor de edad");
    }
})

//Ejercicio 3 Calculadora
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const operacion = req.params.operacion;
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    if(operacion == "suma"){
        res.send((a+b));
    }else if(operacion == "resta"){
        res.send((a-b));
    }else if(operacion == "multiplicacion"){
        res.send((a*b));
    }else if(operacion == "division"){
        res.send((a/b));
    }
})

/*
Ejercicio 4 Tabla de multiplicar
Ruta: /tabla/numero
Respuesta
 N X 1 = R...

 let tabla = 5;
for(let i = 1; i<=5; i++){
    //console.log("Iteración:", i);
    console.log(`${tabla} x ${i} = ${tabla*i}`);
    console.log(tabla+" x "+i+" = "+tabla*i);
}

app.get("/tabla/:numero", (req, res) => {
    const num = parseInt(req.params.num);
    const tabla = parseInt(req.params.tabla);

    for(let i = 1; i<=5; i++){
        console.log(tabla+" x "+i+" = "+tabla*i);
    }
})
*/

//22 de julio del 2026
let peliculas = [
    {
        id: 1,
        titulo: "Batman",
        director: "Christopher Nolan",
        año: 2008
    }, 
    {
        id: 2,
        titulo: "Interestelar",
        director: "Christopher Nolan",
        año: 2024
    }
]

let idActual = peliculas.length + 1;

//Obtener todas las peliculas
app.get("/peliculas", (req, res) => {
    res.json(peliculas);
})

//Obtener una pelicula por ID
app.get("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
});

//Registrar una pelicula nueva o crear
app.post("/peliculas", (req, res) => {
    const {titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje : "Faltan datos de la pelicula"
        });
    };

    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje : "Pelicula registrada correctamente",
        pelicula : nuevaPelicula
    });
});

//Actualizar pelicula
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const {titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje : "Faltan datos de la pelicula"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje : "Pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director, 
        año: Number(año)
    };

    res.json({
        mensaje : "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });

});


//Eliminar una pelicula
app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );
    if(indice === -1){
        return res.status(404).json({
            mensaje : "Pelicula no encontrada"
        });
    }
    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice, 1);

    res.json({
        mensaje : "Pelicula eliminada correctamente",
        pelicula : peliculaEliminada
    });
});





app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
})