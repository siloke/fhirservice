const express = require('express');
var bodyParser = require('body-parser');
const {
    getAuthToken,
    postFhirPatient,
} = require('./fhir.js');
const { 
    insertDBPatient,
    listAllPatients,
    listAllPractitioners
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
        const id = await postFhirPatient(token, data)
        data.fhirID = id;
        console.log(data)
        insertDBPatient(data)

        res.redirect("/index.html")
    }
})

app.get("/listarPacientes", async (req, res) => {
    
    let listPatients;
    try {
        listPatients = await listAllPatients();
    }
    catch(err) {
        throw err;
    }

    res.send(listPatients);
})

app.get("/listarProfissionais", async (req, res) => {
    
    let listPractitioners;
    try {
        listPractitioners = await listAllPractitioners();
    }
    catch(err) {
        throw err;
    }

    res.send(listPractitioners);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})