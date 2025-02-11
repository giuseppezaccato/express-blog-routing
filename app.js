
//task 1 inizializzazione npm / 2 installazione framework / 3 creazione .gitignore

const express = require("express");

//task importo da data.js l'array di posts! 
//? non mi serve perchè è importato gia dentro a "posts.js"
//? const posts = require("./public/data") 

//a questo punto mi basta importare direttamente la variuabile corrispondente all'esportazione di posts.js=> BLOG
const blogFromPosts = require("./routers/posts")

//* questa variabile contiene l'oggetto che rappresenta l'applicazione (istanza)
const app = express();

app.use(express.static('public'));

app.use("/posts", blogFromPosts);

const port = 3000;



app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

