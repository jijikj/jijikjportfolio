const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const fs = require('fs');
app.use(cors());

// Une route simple pour tester
app.get('/', (req, res) => {
    res.send("Le serveur du portfolio est prêt !");
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur : http://localhost:${PORT}`);
});
app.get('/api/projects',(req,res)=>{
    fs.readFile('./projet.json','utf-8',(err,data)=>{
        if(err){
            res.status(500).send("Erreur interne");
            return;
        }
        res.json(JSON.parse(data));
    });
})