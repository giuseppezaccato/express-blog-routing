# Configurazione di un Server Express: Guida Passo Passo

## Task Preliminari
1.  **Inizializzazione NPM (`npm init`)**: Questo comando avvia la procedura guidata per la creazione del file `package.json`, che conterrà le informazioni sul progetto e le relative dipendenze. Rispondere alle domande proposte per completare l'inizializzazione.

2.  **Installazione Express (`npm i express`)**: Installa il framework Express, necessario per la creazione del server.

3.  **Creazione del file `.gitignore`**: Crea un file `.gitignore` nella directory principale del progetto. Questo file conterrà l'elenco di file e cartelle che Git ignorerà durante il commit, come `node_modules` e i file `.DS_Store`

## Configurazione del Server
4.  **Importazione di Express**: Nel file principale del progetto (`app.js`), importa Express:

5.  **Creazione dell'app**: Crea un'istanza dell'applicazione Express

6.  **Definizione della porta**: Definisci la porta su cui il server sarà in ascolto.

7.  **Impostazione degli asset statici**: Configura la cartella `public` per servire i file statici (immagini, CSS, JavaScript)

8.  **Definizione delle rotte**: Definisci le rotte per gestire le richieste in arrivo.

9.  **Avvio del server**: Avvia il server, specificando la porta su cui sarà in ascolto:

## Configurazione `package.json`
10. **Aggiunta degli script**: Aggiungi o modifica gli script "start" e "watch" nel file `package.json` per avviare il server in modalità produzione e sviluppo:
    *   **Sviluppo**: `npm run watch` 
    *   **Produzione**: `npm run start`

## Esecuzione
11. **Avvio del server**:

## Test
12. **Verifica delle rotte**: Utilizza Postman per testare le rotte definite:

    *   `GET http://localhost:3000/`: deve restituire un messaggio.
    *   `GET http://localhost:3000/bacheca`: deve restituire l'array di post in formato JSON.
