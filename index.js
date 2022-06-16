import express from 'express';
import cors from 'cors'

const server = express();
server.use(cors());

let users = [];
let tweets = [];

server.post("/sign-up", (req,res) =>{
    const newUser = req.body;
    res.send(newUser);
})

server.post("/tweets", (req,res) =>{

})

server.get("/tweets", (req,res) =>{

})

server.listen(5000)