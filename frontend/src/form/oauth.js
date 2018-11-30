
// GET Authorization Request 
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://auth.shapeshift.io/oauth/authorize?response_type=code&client_id={{clientId}}&redirect_uri={{redirectUri}}",
    "method": "GET",
    "headers": {
        "Content-Type": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

// POST Authorization Grant 
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://auth.shapeshift.io/oauth/token",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "processData": false,
    "data": "{ \"grant_type\": \"authorization_code\", \"code\": \"083b7a01-df30-4441-a0f9-9a9a38dd7246\" }"
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

// GET Access Token Details
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://auth.shapeshift.io/oauth/token/details",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

// POST Revoke Access Token 
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://auth.shapeshift.io/oauth/token/revoke",
    "method": "POST",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic {{base64encodedClientCredentials}}"
    },
    "data": {
        "token": "accessToken"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});