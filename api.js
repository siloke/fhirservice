const express = require('express');
var bodyParser = require('body-parser');
const {
    getAuthToken,
    postPatient,
} = require('./fhir.js');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/enviarPaciente", async (req, res) => {
    const token = await getAuthToken();
    const id = await postPatient(token)
    //todo INSERT database
    res.send("ok")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})