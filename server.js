const http = require('http');
const { exec } = require('child_process');

const inputArgument = process.env.npm_config_input;
console.log("\nSetup")
console.log("\n- config loaded: "+inputArgument)
http.createServer((req, res) => {
  exec(`npm run generate:access_token --input="${inputArgument}"`, (err, stdout, stderr) => {
    if (err) {
      res.writeHead(500);
      return res.end(JSON.stringify(err));
    }

    const tokenMatch = stdout.match(/(eyJ[\w-]+\.[\w-]+\.[\w-]+)/);

    if(tokenMatch && tokenMatch[0]){
      res.writeHead(200);
      console.log("\n- token generated!")
      return res.end(tokenMatch[0].trim());
    } else {
      res.writeHead(500);
      return res.end(JSON.stringify({error: "No token found"}));
    }

  });
}).listen(8000);

console.log('\nServer running at http://127.0.0.1:8000/');
