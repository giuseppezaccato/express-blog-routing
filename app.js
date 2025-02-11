//?vedi README per guida completa

//task 1 inizializzazione npm / 2 installazione framework / 3 creazione .gitignore

const express = require("express");

//* questa variabile contiene l'oggetto che rappresenta l'applicazione (istanza)
const app = express();

app.use(express.static('public'));

const port = 3000;


//* da postman "localhost:3000/"
app.get("/", (req, res) => {
    res.send(`Server Del Mio Blog Personale`);
});


app.get("/bacheca", (req, res) => {

    const posts = [
        {
            titolo: "Il mio viaggio in Italia",
            contenuto: "Esplorando le meraviglie di Roma e Firenze...",
            immagine: "images/italia.jpg",
            tags: ["viaggio", "italia", "arte", "cucina"]
        },
        {
            titolo: "Ricetta della pasta alla carbonara",
            contenuto: "Un classico della cucina italiana, facile e delizioso...",
            immagine: "images/carbonara.jpg",
            tags: ["cucina", "italia", "pasta", "ricetta"]
        },
        {
            titolo: "I migliori libri da leggere quest'estate",
            contenuto: "Una selezione di romanzi, thriller e saggi da non perdere...",
            immagine: "images/libri.jpg",
            tags: ["libri", "lettura", "estate", "consigli"]
        },
        {
            titolo: "Come fotografare il cielo notturno",
            contenuto: "Consigli e tecniche per catturare la bellezza delle stelle...",
            immagine: "images/stelle.jpg",
            tags: ["fotografia", "natura", "stelle", "notte"]
        },
        {
            titolo: "La storia del caffè",
            contenuto: "Dalle origini in Etiopia alla diffusione in tutto il mondo...",
            immagine: "images/caffe.jpg",
            tags: ["caffè", "storia", "bevanda", "cultura"]
        }
    ];
    res.json(posts);
    // res.type('json').send(posts) //* equivalente alla riga sopra
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

