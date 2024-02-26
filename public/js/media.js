const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5500;

app.use(express.static('public')); // Serve static files

// Open SQLite database
let db = new sqlite3.Database('./database/media.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the media database.');
});

// Endpoint to get random videos
// Corrected endpoint
app.get('/api/videos/random', (req, res) => {
    const sql = `SELECT Title, FilePath FROM Videos ORDER BY RANDOM() LIMIT 1`;
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json({
        "message": "success",
        "data": rows
      });
    });
  });
  

// Similar endpoints for Art, Podcasts, and Blog Posts

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
