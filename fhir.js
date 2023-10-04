const axios = require('axios');
require('dotenv').config();

const fhirEndpoint = "https://fiaphealthservices-fhirservice.fhir.azurehealthcareapis.com/";

async function getAuthToken() {
    const config = {
        method: 'post', 
        url : process.env.AAD_TENANT + process.env.TENANT_ID + "/oauth2/token/",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : {
            "client_id": process.env.APP_ID,
            "client_secret": process.env.APP_SECRET,
            "grant_type" : "client_credentials",
            "resource": fhirEndpoint,
        }
    }
    const resposta = await axios(config)

    return resposta.data.access_token;

}

async function postFhirPatient(accessToken, dataClient) {

    const dataPatient = {
      "resourceType": "Patient",
      "active": true,
      "name": [
        {
          "use": "official",
          "given": [
            dataClient.paciente
          ]
        }
      ],
      "telecom": [
        {
          "system": "email",
          "value": dataClient.email,
        },
        {
          "system": "phone",
          "value": dataClient.phone,
        }
      ],
      "birthDate": dataClient.nascimento,
    };

    const config = {
        method : "post",
        url : fhirEndpoint + "Patient",
        data : dataPatient,
        headers : {
            "Authorization": "Bearer " + accessToken,
            "Content-type": "application/json"
        }
    }

    let resposta
    
    try {
      resposta = await axios(config);
    }
    catch(err) {
      throw err;
    }
    
    return resposta.data.id;

}

module.exports = {
  getAuthToken,
  postFhirPatient
};

