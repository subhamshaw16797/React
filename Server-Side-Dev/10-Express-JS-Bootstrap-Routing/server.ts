import express from 'express';
import path from 'path';

const app:express.Application=express();

const hostName:string='127.0.0.1';
const port:number=5000;

//configure Static Files
app.use('/public',express.static(path.join(__dirname,'public')));

//html response

app.get('/',(request:express.Request,response:express.Response)=>
{
    response.sendFile(path.join(__dirname,'views','index.html'))
});

app.get('/about',(request:express.Request,response:express.Response)=>
{
    response.sendFile(path.join(__dirname,'views','about.html'))
});

app.get('/contact',(request:express.Request,response:express.Response)=>
{
    response.sendFile(path.join(__dirname,'views','contact.html'))
});

app.get('/services',(request:express.Request,response:express.Response)=>
{
    response.sendFile(path.join(__dirname,'views','services.html'))
});




app.listen(port,hostName,()=>
{
    console.log(`Express Server Started At http://${hostName}:${port}`);
})