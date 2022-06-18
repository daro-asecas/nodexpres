const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 1, nombre: "pepe", raza: "perro"},
            {id: 2, nombre: "pipo", raza: "gato"},
        ]
    })
});

// esto no sirve aca, lo dejo por las dudas
// ----------------------------------------
// router.get('/:id', (req, res) => {
//     res.render(req.params.id, {titulo : "mi titulo dinamico"})
// });
  

module.exports = router;