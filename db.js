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

    const sql = `INSERT INTO patients (nome, email, telefone, data_nascimento, status, fhir_id, profissionais_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?);`

    const params = [data.paciente, data.email, data.phone, data.nascimento, data.status, data.fhirID, data.profissional];

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
        const sql = "SELECT * FROM patients ORDER BY patient_id DESC;";
        const sql2 = `
        SELECT patient_id, patients.nome AS nomepaciente, email, telefone, data_nascimento, status, profissionais.nome AS nomeprofissional
        FROM patients
        INNER JOIN profissionais 
        ON profissionais.profissionais_id = patients.profissionais_id ORDER BY nomepaciente DESC;`

        db.all(sql2, (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        });

        db.close()

    })

}

function listAllPractitioners() {

    return new Promise((resolve, reject) => {

        const db = createDBConnection();
        const sql = "SELECT * FROM profissionais ORDER BY profissionais_id DESC;";

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
    listAllPatients,
    listAllPractitioners
};
