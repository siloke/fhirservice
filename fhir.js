const axios = require('axios');

const aadTenant = "https://login.microsoftonline.com/";
const tenantID = "b2693f3b-33d1-47fd-a938-4af2eaf21b1c";

const appID = "8ecf5fbd-b08a-4ec3-a9c1-bd8f8ac5f7f6";
const appSecret = "UA48Q~Dc2M8cGCPCOPvS5Y35Z5PafmIOa-tVRaHX";

const fhirEndpoint = "https://fiaphealthservices-fhirservice.fhir.azurehealthcareapis.com/";

async function getAuthToken() {
    const config = {
        method: 'post', 
        url : aadTenant + tenantID + "/oauth2/token/",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : {
            "client_id": appID,
            "client_secret": appSecret,
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

// async function main() {
//     const accessToken = await getAuthToken()
//     postPractitioner(accessToken)
// }

module.exports = {
  getAuthToken,
  postFhirPatient
};

