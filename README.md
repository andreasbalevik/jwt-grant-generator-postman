# generate-maskinporten-token

This project generates Maskinporten token using the official [jwt-grant-generator](https://github.com/felleslosninger/jwt-grant-generator) library from [Digdir](https://github.com/felleslosninger).

# Requirements
- [jq](https://stedolan.github.io/jq/)

## Installation
```
npm install && npm run setup
```

## Usage

Remeber to add properties files, see [jwt-grant-generator](https://github.com/felleslosninger/jwt-grant-generator) for example.

Generate access_token.
```
npm run generate:access_token --input=example.properties
```

Generate (jwt-grant-generator output)
```
npm run generate --input=example.properties --input=example.properties
```

## Automatic tokens (for postman)
Start server to automatically generate maskinporten token when requested.  
```
npm run server:start --input=example.properties
``````

In postman, add 'Pre-request script' to your collection.
```
pm.sendRequest('http://127.0.0.1:8000', (err, response) => {
    pm.variables.set("token", response.text().trim());
})
```   
In 'Authorization', add 'Bearer Token' and set token to `{{token}}`