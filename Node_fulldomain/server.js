
// file System

// const file=require("node:fs").promises
// console.log("0")
// const newFile=file.readFileSync("./new.txt","utf-8")
// console.log(newFile)
// console.log("First")
// file.readFile("./nw.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log("second")
// file.writeFileSync("./writefile.txt","Please keep me here")
// file.writeFile("./writefile.txt","I am also left alone",{flag:"a"},(err,data)=>{
//     console.log("file writing complete")
// })
// const buffer=new Buffer.from("Nangopan")

// console.log(buffer.toJSON())
// buffer.write("kalimuthu")
// console.log(buffer.toString())

// fs.promises
// file.readFile("./writefile.txt","utf-8").then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})

// async function readfile(){
//     try{
//         const data=await file.readFile("./writefile.txt","utf-8")
//     console.log(data)
//     }catch(err){
// console.log(err)
//     } 
// }
// readfile()

// streams
// const fs=require("fs")
// const readablestream=fs.createReadStream("./writefile.txt",{encoding:"utf-8",highWaterMark:3})
// const writeablestream=fs.createWriteStream("./newfile.txt")
// readablestream.pipe(writeablestream)

// readablestream.on("data",(minidatas)=>{
//     writeablestream.write(minidatas)
//     console.log(minidatas)
// })


// Events
// const eventEmitter=require("events");
// const emitter=new eventEmitter();
// emitter.on("personaldetails",(name,age)=>{
// console.log(`My name is ${name} and my age is ${age}`)
// })
// emitter.emit("personaldetails","Nangopan","25")

// const http=require("http");

// creating a server

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{contenttype:"text/plain"})
//     res.write("from write")
//     console.log(req)
//     res.end("hii from server")
// })
// server.listen(3000,()=>{console.log(req)})

//  routing
// const http=require("http");
// const server=http.createServer((req,res)=>{
// if(req.url==="/"){
//     res.writeHead(200)
//     res.end("home page");
// }
// if(req.url==="/about"){
//     res.writeHead(200)
//     res.end("about page")
// }else{
//     res.writeHead(404)
//     res.end("page not found")
// }
// })
// server.listen(3001,()=>{
//     console.log("sever running in port 3001")
// })

// cluster module
// const cluster=require('cluster')
// const http=require("http")
// if(cluster.isMaster){
//     cluster.fork();
//     cluster.fork();
// }else{
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200)
//         res.end("fast-page")
//     }else if(req.url==="/slowpage"){
//    // cpu intensive task eg
//    for(let i=0;i<600000;i++){}
//    res.writeHead(200)
//    res.end("slow-page")
//     }
     
//     })
//     server.listen(3001,()=>{
//         console.log("server running on port 3001")
//     })
// }

// const { exec }=require('child_process')
// exec("pwd",(err,out,tererr)=>{
//     if(err){
//         console.log(err)
//     }
//     if(tererr){
//         console.log(tererr)
//     }
//     console.log(out)
// })

// const Express=require("express") 
// const app=new Express();
// app.get("/",(req,res)=>{
    
//     res.status(200).send("end it")
// })
// app.listen(3001,()=>{
//     console.log("server running")
// })


// const express=require("express")
// const app=new express()


// Error handling
// app.get("/",(req,res,next)=>{
//     throw new Error()
//     next();
// })
// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.status(400).send("401 unauthorized request")
//     }
// })


// redirect
// app.get("/",(req,res)=>{
//     res.send("Home page")
// })
// app.get("/about",(req,res)=>{
//     res.redirect("/")
// })


// app.listen(3001,()=>{
//     console.log("server running")
// })
 

// query parameters sum
// const express = require("express");
// const app = express();


// app.get("/",(req,res)=>{
//     const { num1,num2 }=req.query;
//     if(!num1||!num2||isNaN(num1)||isNaN(num2)){
//         res.send("please enter valid numbers")
//     }else{
//         const sum=(num1)+(num2)
//         res.send(`The sum is ${sum}`)
//     }
// })

// app.listen(5500, () => {
//     console.log("Server running on port 5500...");
// });


// const express = require("express");
// const app = express();

// const users = [{ id: 1, name: "ejaz" }, { id: 2, name: "madhan" }];

// // Route to get all users
// app.get("/users", (req, res) => {
//     res.json(users);
// });

// // Route to get a specific user by ID
// app.get("/user/:id", (req, res) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find(user => userId === user.id); // Corrected 'user.id'

//     if (!user) {
//         // Set status code before sending the response
//         res.status(404).send("No User found");
//     } else {
//         res.json(user);
//     }
// });

// querry
//  app.use("/users",(req,res)=>{
//     console.log(req.query)
//     res.send("hi from server")
//  })

//  params(dynamic routing)
// app.use("/user/:userid/:name/:number",(req,res)=>{
// console.log(req.params)
//     res.send("hii")
// })

// Start the server
// app.listen(4400, () => {
//     console.log("Server is running on Port 4400...");
// });


// child process
// const {exec}=require('child_process')
// exec("dir",(err,stdout,stderr)=>{
// if(err){
//     console.log(err)
//     return;
// }if(stderr){
//     console.log(stderr)
// }
// console.log(stdout)
// })

// const {execFile}=require('child_process')
// execFile("/new.exe",(err,stdout,stderr)=>{
// if(err){
//     console.log(err)
//     return;
// }if(stderr){
//     console.log(stderr)
// }
// console.log(stdout)
// })


// const {spawn}=require("child_process")
// const child=spawn("dir",[])
// child.stdout.on("data",(data)=>{
//     console.log(data)
// })
// child.stderr.on("data",(data)=>{
//     console.log(data)
// })
// child.on("err",(error)=>{console.log(error)})

// let fs=require("fs")
// let currentDate=new Date()
// let formattedDate=currentDate.toISOString()

// fs.writeFileSync("new.txt",formattedDate,(err)=>{
//    if(err) {}
//    else{
//     console.log("date written")
//    }
// })

// // child process fork
// const express=require("express")
// const app=new express()
// const {fork}=require("child_process")
 
// app.use("/",(req,res)=>{
//     const child=fork("./fork.js");
//     child.send("start")
//     child.on("msg",(sum)=>{
//       res.send(sum)})
// }
// )
    
     


// app.listen(3001,()=>{
//     console.log("server running on port 3001")
// })


// const express=require("express")
// const app=new express()
// const users=[{id:1,name:"nangu"},{id:2,name:"Zanny"}]
// app.get('/users',(req,res)=>{
//     res.json(users)
// })

// app.get("/users/:id",(req,res)=>{
//     const userId=parseInt(req.params.id)
//     const user=users.find(user=>userId===user.id)
//     if(!user){
//         res.status(401).send("Invalid login")
//     }else{
//         res.json(user)
//     }
// })
// app.listen(3001,()=>{console.log("server running")})


// worker threads

// const http=require("http")
// const {Worker}=require("worker_threads")
// const server=http.createServer((req,res)=>{
//     if(req.url==="/fastpage"){
//         res.end("fastpage")
//     }else if(req.url==="/slowpage"){
//       const worker=new Worker("./workerthread.js")
//       worker.on("message",(j)=>{
//         res.end(`slow page ${j}`)
//       })
//     }
// })
// server.listen(3001,()=>{
//     console.log("server running")
// })


// let sum=require("./sum.js")

// sum(2,3)

// let http=require("http")
// let fs=require("fs")

// let date=new Date()
// let formattedDate=date.toISOString()
// fs.writeFileSync("./new.tx",formattedDate,(err)=>{
//   if(err){
//     console.log("err")
//   }else{
//     console.log("data written")
//   }
// })


// const http=require("http")
// let server=http.createServer((req,res)=>{
//   res.writeHead(200)
//   res.end("hello from server")
// })
// server.listen(3001,()=>{
//   console.log("server running on port 3001")
// })


// const express=require("express")
// const app=new express()

// app.get("/",(req,res)=>{
//   res.status(200).send("hii from server")
// })
// app.listen(3002,()=>{
//   console.log("server running")
// })


// const express=require("express")
// const app=new express()
// app.get("/:val1/:val2",(req,res)=>{
//   let num1=(req.params.val1)*1
//   let num2=(req.params.val2)*1
//   const result=(num1/num2)
//   console.log(num1,num2,result,req.params)
//     res.send(`${result}`)

// })
// app.listen(3000,()=>{
//   console.log("server running")
// })


// const express=require("express")
// const app=new express()
// app.get("/",(req,res)=>{
//   let {num1,num2}=req.query
//   let sum=(num1*1)+(num2*1)
//   res.status(200).send(`the sum is ${sum}`)

// })

// app.listen(3000,()=>{
//   console.log("server running")
// })

// let express=require("express")
// let app=new express()
// let users=[{id:1,name:"nangu"},{id:2,name:"zanny"}]

// app.get("/users",(req,res)=>{
//   res.json(users)
// })

// app.get("/users/:id",(req,res)=>{
//   let userID=parseInt(req.params.id)
//   let user=users.find((user)=>userID===user.id)
// if(!user){
//   res.status(403),send("Invalid user")
// }else{
//   res.send(user)
// }
// })
// app.listen(3001,()=>{
//   console.log("server running")
// })

// let express=require("express")
// let app=new express()

// app.get("/",(req,res,next)=>{
//   throw new Error()
//   next()
// })
// app.use("/",(err,req,res,next)=>{
//   res.status(400).send("Invalid response")
// })

// app.listen(3001,()=>{
//     console.log("server running")
//   })

// let express=require("express")
// let {fork}=require("child_process")
// let app=new express()

// app.get("/",(req,res)=>{
//   let child=fork("./fork2.js")
//   child.send("start")
//   child.on("mssg",(sum)=>{
//     res.send(`${sum}`)
//   })
// })

// app.listen(3000,()=>{
//   console.log("server running")
// })

// const {exec}=require("child_process")
// exec("dir",(err,stdout,stderr)=>{
//   if(err){
//     console.log(err)
//   }if(stderr){
//     console.log(stderr)
//   }
//     console.log(stderr)
  
// })


// let http=require("http")
// let cluster=require("cluster")

// if(cluster.isMaster){
//   cluster.fork()
//   cluster.fork()
// }else{
//  const server=http.createServer((req,res)=>{
// if(req.url==="/slowpage"){
//   res.end("slowpage")
// }if(req.url==="/fastpage"){
//   let sum=0
//   for(let i=0;i>600000;i++){
//     sum=sum+i
//   }
//   res.end(`sum is ${sum}`)
// }
//   })
// }
// server.listen(3002,()=>{
//   console.log("server running")
// })


// const fs=require("fs")
// fs.readFile("./newfile.txt","utf-8",(err,data)=>{
//   console.log(data)
// })
// fs.writeFile("./writeable.txt","my name",(err)=>{
//   if(err){console.log(error)}
//   else{
//     console.log('file written')
//   }
// })

// let Emitter=require("events")
// let emitter=new Emitter()
// emitter.on("my name",(name,age)=>{
//   console.log(`my name is ${name} and my age is ${age}`)
// })
// emitter.emit("my name","nangopan",25)
