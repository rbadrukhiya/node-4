// routing

// method 1

// npm i
// npm init -y
// npm i express
// const express = require('express')
// const app = express()

// app.get('/' , function(req , res){
//     res.send('hello world')
// })
// app.get('/blog' , function(req , res){
//     res.send('blog world')
// })
// app.listen(3030)



// method 2

// npm i http
// const http = require('http')
// const url = require('url')
// http.createServer(function(req , res){
//     console.log('listening');
//     console.log(req.url);
//     if(req.url == '/')
//     {
//         res.end('home page')
//     }
//     else if(req.url == '/blog')
//     {
//         res.end('blog')
//     }
//     else
//     {
//         res.end("error")
//     }
// }).listen(2020)


// json format

const json = {
    name:"ravi",
    email:"ravi@gmail.com"
}
var a = JSON.stringify(json)
var b = JSON.parse(a)
console.log(json )
console.log(a , 'a')
console.log(b , 'b')