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

async function postPatient(accessToken) {

    const dataPatient = {
      "resourceType": "Patient",
      "id": "example-paciente",
      "identifier": [
        {
          "use": "official",
          "system": "http://registrodopaciente.org",
          "value": "987654321"
        },
        {
          "use": "usual",
          "system": "http://cns.saude.gov.br",
          "value": "123456789012345"
        }
      ],
      "active": true,
      "name": [
        {
          "use": "official",
          "given": [
            "Maria"
          ]
        }
      ],
      "telecom": [
        {
          "system": "email",
          "value": "john.doe@email.com",
        }
      ],
      "birthDate": "1985-07-10",
      "generalPractitioner": [
        {
          "reference": "Practitioner/12345", 
          "display": "Dr. Jane Smith"
        }
      ],
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
    const resposta = await axios(config);
    
  return resposta.data.id;

}

// async function main() {
//     const accessToken = await getAuthToken()
//     postPractitioner(accessToken)
// }

module.exports = {
  getAuthToken,
  postPatient
};

