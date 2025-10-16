// Import del framework di express
const express = require("express");

const app = express();

const port = 3000;

const postRouter = require("./routers/posts")

// Middleware per servire file statici
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("<h1>Server del mio Blog</h1>")
});

// Rotte per i prodotti
app.use("/posts", postRouter)


// Ascolto della porta
app.listen(port, () => {
    console.log(`Server del Blog attivo su http://localhost:${port}`)
});