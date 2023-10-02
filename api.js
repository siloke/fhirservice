const express = require('express');
var bodyParser = require('body-parser');
const {
    getAuthToken,
    postFhirPatient,
} = require('./fhir.js');
const { 
    insertDBPatient,
    listAllPatients,
} = require('./db.js');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/enviarPaciente", async (req, res) => {
    const data = req.body
    if (Object.keys(data).length === 0) {
        res.status(400).send({
            message: "Não foi possível cadastrar"
        })
    }
    else {
        const token = await getAuthToken();
        console.log(data)
        const id = await postFhirPatient(token, data)
        data.fhirID = id;
        insertDBPatient(data)

        res.redirect("/index.html")
    }
})

app.get("/listarPacientes", async (req, res) => {
    
    let list;
    try {
        list = await listAllPatients();
    }
    catch(err) {
        throw err;
    }

    res.send(list);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})