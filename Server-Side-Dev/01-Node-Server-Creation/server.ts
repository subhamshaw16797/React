import http from 'http';

const hostName:string='127.0.0.1';
const port:number=5000;

const server:http.Server=http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');
    response.end(`<h2>Welcome to the Server</h2>`);
});

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})