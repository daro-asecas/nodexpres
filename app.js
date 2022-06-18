const express = require("express");
const app = express();

const port = 3000;

// motor de plantillas
app.set('view engine','ejs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/public"));


// Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
  res.status(404).render("404",{
      titulo: "404",
      descripcion: "Error 404"
  })
});



// app.get('/index', (req, res) => {
//   res.render("index", {titulo : "mi titulo dinamico"})
// });

// app.get('/servicios', (req, res) => {
//   res.render("servicios", {titulo : "mi titulo de servicios"})
// });

// app.get('/contacto', (req, res) => {
//   res.render("contacto", {titulo : "titulo de contacto"})
// });


//
// app.get("/", (req, res) => {
//   res.send("Mi respuesta desde express")
// });

app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto: ${port}`);
});