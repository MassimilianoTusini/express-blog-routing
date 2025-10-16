// Import del framework di express
const express = require("express");

// Import dell'array
const menu = require("../data/menu")

// Settiamo il router
const router = express.Router()



// Rotte di CRUD sulla risorsa bacheca
// Mostra
router.get("/", function (req, res) {
    res.json(menu) // primo bonus per mostrare tutta la lista json
});

// Store
router.get("/:id", function (req , res) {
    res.send("Dettagli prodotto" + req.params.id)
});


// Aggiungi
router.post("/", function (req , res) {
    res.send("Aggiungi prodotto")
});

// Modifica tutto
router.put("/:id", function (req , res) {
    res.send("Aggiorna prodotto" + req.params.id)
});

// Modifica parziale
router.patch("/:id", function (req , res) {
    res.send("Modifica parziale prodotto" + req.params.id)
});

// Cancella
router.delete("/:id", function (req , res) {
    res.send("Cancella prodotto" + req.params.id)
});

module.exports = router;