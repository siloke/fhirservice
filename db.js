const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/enterpriseFhirDatabase.db', (error) => {
    if(error) {
        console.log(error)
    }
});

db.all("SELECT * FROM COMPANY", (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows); // Array de resultados
});

db.close()
