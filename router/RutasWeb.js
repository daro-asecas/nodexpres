const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
});
  
router.get('/:id', (req, res) => {
    res.render(req.params.id, {titulo : "mi titulo dinamico"})
});
  

module.exports = router;