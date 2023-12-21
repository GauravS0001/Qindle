import { call, put, select } from 'redux-saga/effects';
var aesEcryptionDecryption = require('../api/aes_encrypt_decrypt');

export function* queryApi({ endpoint, method, body = null }) {
  const state = yield select();
  var token = state.user.userDetails.token

  const res = yield call(makeRequest, {
    endpoint,
    method,
    body,
    token
  });
  return res;
}

const makeRequest = async ({ endpoint, method, body = null, token }) => {
  var request = {
    method: method,
  };
  request.headers = {
    "Content-Type": "application/json"
  }

  if (method === "POST") {
    request = {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body === '{}' ? undefined : aesEcryptionDecryption.encryptData(body),
    };
  }


  if (token != undefined) {
    request.headers = {
      "x-json-web-token": token,
    }
  }

  if (method === "POST-NOAES") {
    method = "POST";
    request = {
      method: method,
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: body,
    };
  }


  if (method === "POST-NOJSON") {
    request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-json-web-token": token,
      },
      body: body === '{}' ? undefined : aesEcryptionDecryption.encryptData(body),
    };
  }

  if (method === "POST-NOJSON2") {
    request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-json-web-token": token,
      },
      body: body === '{}' ? undefined : aesEcryptionDecryption.encryptData(body),
    };
  }

  if (method === "DELETE-NOAES") {
    request = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-json-web-token": token,
      },
      body: body === '{}' ? undefined : body,
    };

  }
  //console.log(endpoint, request)
  return fetch(endpoint, request)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {
      console.log('error', error)
    });
};
