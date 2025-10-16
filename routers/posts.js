// Import del framework di express
const express = require("express");

// Import dell'array
const menu = require("../data/menu")

// Settiamo il router
const router = express.Router()



// Rotte di CRUD sulla risorsa bacheca
// INDEX
router.get("/", function (req, res) {
    res.json(menu) // primo bonus per mostrare tutta la lista json
});

// SHOW
router.get("/:id", function (req , res) {
    const id = parseInt(req.params.id);
    const post = menu.find(i => i.id === id);

    if(!post) {
        return res.status (404).send("Prodotto non trovato");
    }

    res.json(post)
});


// CREATE
router.post("/", function (req , res) {
    res.send("Aggiungi prodotto")
});

// UPDATE COMPLETO
router.put("/:id", function (req , res) {
    res.send("Aggiorna prodotto" + req.params.id)
});

// UPDATE PARZIALE
router.patch("/:id", function (req , res) {
    res.send("Modifica parziale prodotto" + req.params.id)
});

// DELETE
router.delete("/:id", function (req , res) {
    res.send("Cancella prodotto" + req.params.id)
});

module.exports = router;