// Import del framework di express
const express = require("express");

// Settiamo il router
const router = express.router()

// Rotte di CRUD sulla risorsa bacheca
// Mostra
app.get("/", function (req , res) {
    res.send("Lista dei prodotti")
});

// Store
app.get("/:id", function (req , res) {
    res.send("Dettagli prodotto" + req.params.id)
});


// Aggiungi
app.post("/", function (req , res) {
    res.send("Aggiungi prodotto")
});

// Modifica tutto
app.put("/:id", function (req , res) {
    res.send("Aggiorna prodotto" + req.params.id)
});

// Modifica parziale
app.patch("/:id", function (req , res) {
    res.send("Modifica parziale prodotto" + req.params.id)
});

// Cancella
app.delete("/:id", function (req , res) {
    res.send("Cancella prodotto" + req.params.id)
});

module.exports = router;