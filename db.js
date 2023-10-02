const sqlite3 = require('sqlite3').verbose();

function createDBConnection() {
    const db = new sqlite3.Database('./db/enterpriseFhirDatabase.db', (err) => {
        if(err) {
            throw err
        }
    });
    return db;
}

function insertDBPatient(data) {
    const db = createDBConnection();

    const sql = `INSERT INTO patients (nome, email, telefone, data_nascimento, status, fhir_id) 
    VALUES (?, ?, ?, ?, ?, ?);`

    const params = [data.paciente, data.email, data.phone, data.nascimento, data.status, data.fhirID];

    db.run(sql, params, (err) => {
        if(err) {
            return console.log(err.message)
        }
        console.log("Nova linha adicionada na tabela patients")
    })

    db.close()
}

function listAllPatients() {

    return new Promise((resolve, reject) => {

        const db = createDBConnection();
        const sql = "SELECT * FROM patients";

        db.all(sql, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        });

        db.close()

    })

}


module.exports = {
    createDBConnection,
    insertDBPatient,
    listAllPatients
};
