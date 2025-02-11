
//task importo express
const express = require("express");
const app = express();
const port = 3000;


//fixed importo da data.js l'array di posts! 
//? non mi serve QUI perchè è importato gia dentro a "posts.js" (riga 9)
//// const posts = require("./public/data") 

//task a questo punto mi basta importare direttamente il modulo corrispondente all'esportazione di posts.js=> blog
const postsRouter = require("./routers/posts");

//task accesso all'asset statico "public"
app.use(express.static('public'));

//task "monto" il router postsRouter sul percorso /posts
//* tutte le rotte definite all'interno del modulo postsRouter saranno accessibili sotto il PREFISSO "/posts"
app.use("/posts", postsRouter);

//task avvio il server e lo lascio in ascolto su "port" (3000)
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});


