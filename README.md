# generate-maskinporten-token

## Installation
1. Install jq. On Mac: `brew install jq`
2. Run npm install in the root of the project. `npm install`

## Usage
Generate access_token 
`npm run generate:access_token --input=example.properties`

Generate
`npm run generate --input=example.properties --input=example.properties`

## Server (postman)
Start server to automatically generate maskinporten token when using postman   
`npm run server:start --input=example.properties`

In postman, add 'Pre-request script'
```
pm.sendRequest('http://127.0.0.1:8000', (err, response) => {
    pm.variables.set("token", response.text().trim());
})
```   
In 'Authorization', add 'Bearer Token' and set token to `{{token}}`