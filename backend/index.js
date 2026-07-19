const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/projets', (req, res) => {
  const projectsPath = path.join(__dirname, 'projet.json');
  fs.readFile(projectsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erreur lors de la lecture du fichier des projets.');
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});