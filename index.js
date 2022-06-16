import express from 'express';
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

let users = [];
let tweets = [];

server.post("/sign-up", (req,res) =>{
    const { body } = req;
    const newUser = {
        username: body.username,
        avatar: body.avatar
    }
    users.push(newUser);
    res.send("OK");
})

server.post("/tweets", (req,res) =>{
    const { body } = req;
    const selectedUser = users.find(user => user.username === body.username);
    tweets.push(
        {
          username: body.username,
          avatar: selectedUser.avatar,
          tweet: body.tweet  
        }
    )
    res.send("OK");
})

server.get("/tweets", (req,res) =>{
    let sendableTweets;
    if(tweets.length > 10){
        sendableTweets = tweets.slice(tweets.length -10);
    }else{
        sendableTweets = tweets;
    }
    res.send(sendableTweets);
})

server.listen(5000)