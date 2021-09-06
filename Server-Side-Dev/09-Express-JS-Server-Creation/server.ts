import express, { Application, request } from 'express';
import path from 'path';
import { IProfile } from './database/IProfile';

const app:Application=express();

const hostName:string='127.0.0.1';
const port:number=5000;

//configure express for static files

app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/',(request:express.Request, response:express.Response)=>
{
    response.status(200).send(`<h2>Welcome to ExpressJs Server</h2>`);
})

//html page response
app.get('/home',(request:express.Request, response:express.Response)=>
{
    response.status(200).sendFile(path.join(__dirname,'views','index.html'));
})

//get json data
let profile:IProfile=
{
    "login": "subhamshaw16797",
    "id": 46824619,
    "node_id": "MDQ6VXNlcjQ2ODI0NjE5",
    "avatar_url": "https://avatars.githubusercontent.com/u/46824619?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/subhamshaw16797",
    "html_url": "https://github.com/subhamshaw16797",
    "followers_url": "https://api.github.com/users/subhamshaw16797/followers",
    "following_url": "https://api.github.com/users/subhamshaw16797/following{/other_user}",
    "gists_url": "https://api.github.com/users/subhamshaw16797/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/subhamshaw16797/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/subhamshaw16797/subscriptions",
    "organizations_url": "https://api.github.com/users/subhamshaw16797/orgs",
    "repos_url": "https://api.github.com/users/subhamshaw16797/repos",
    "events_url": "https://api.github.com/users/subhamshaw16797/events{/privacy}",
    "received_events_url": "https://api.github.com/users/subhamshaw16797/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Subham Kumar Shaw",
    "company": null,
    "blog": "",
    "location": "Bhubaneswar",
    "email": null,
    "hireable": null,
    "bio": "This is my Github Profile.",
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 2,
    "followers": 0,
    "following": 0,
    "created_at": "2019-01-18T18:04:37Z",
    "updated_at": "2021-08-12T16:23:56Z"
  }
//json response
app.get('/profile',(request:express.Request, response:express.Response)=>
{
  response.status(200).json(profile);
})

//download the file
app.get('/notes',(request:express.Request, response:express.Response)=>
{
    response.status(200).download(path.join(__dirname,'notes','notes.txt'));
})

app.listen(port,hostName,()=>
{
    console.log(`Express Server is Started At http://${hostName}:${port}`);
})