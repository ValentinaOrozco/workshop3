
const express = require('express'); // importamos el framework express.js
const app = express(); //creamos una variable que acceda a express()
const port = 3000; // creamos una variable para definir el puerto

//
// nos traemos de express el método get para retornar una respuesta
// cuando el cliente ingrese a la ruta '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// nos traemos de express el método listen para levantar el proyecto
// en el puerto definido

app.listen(port, () => {
  console.log(`workshop3 project ru on listening at http://localhost:${port}`);
});