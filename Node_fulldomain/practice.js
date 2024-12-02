// let fs=require("fs")

// let readfile=fs.readFileSync("./newfile.txt","utf-8")
// let readfile=fs.readFile("./newfile.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.writeFileSync("./newfile.txt","my name is nangopan")
// fs.writeFile("./newfile.txt"," enakku innoru peru irkuu",{flag:"a"},(err,data)=>{
//     console.log("file written")
// })


// let buffer=new Buffer.from("nangopan")
// console.log(buffer.toString())


// let readablestream=fs.createReadStream("./newfile.txt",{encoding:"utf-8"})
// let writeablestream=fs.createWriteStream("./new.txt")

// readablestream.pipe(writeablestream)


// let eventemitter=require("events")
// let event=new eventemitter()
// event.on("mydetails",(name,age)=>{
//     console.log(`my name is ${name} and my age is ${age}`)
// })
// event.emit("mydetails","nangopan",25)

// let http=require('http')
// let server=http.createServer((req,res)=>{
//     res.end("hii from server")
// })
// server.listen(3001,()=>{
//     console.log("server running")
// })
// let express=require("express")
// let app=new express()
// app.get("/",(req,res,next)=>{
//     res.send("hii from server")
// })
// app.listen(3001,()=>{
//     console.log("server running")
// })
// let fs=require("fs")
// let date=new Date()
// let formatteddate=date.toISOString()
// fs.writeFileSync("./news.txt",formatteddate)

// ------------------------------------------------------------------------------------------

// let http=require("http")
// let server=http.createServer((req,res)=>{
//   if(req.url==="/"){
//     res.end("Home page")
//   }
//   if(req.url==="/about"){
//     res.end("About page")
//   }
// })
// server.listen(3001,()=>{
// console.log("server is running")
// })

// --------------------------------------------------------------------------------------
// let express=require("express")
// let app=new express()
// app.get("/",(req,res,next)=>{
//     throw new Error()
//     next()
// })
// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.status(400).send("Invalid authorization")
//     }
// })
// app.listen(3001,()=>{
// console.log("server is running")
// })

// ------------------------------------------------------------

// let express=require("express")
// let app=new express()

// app.use("/new",(req,res)=>{
//     res.send("new page")
// })
// app.use("/",(req,res)=>{
//     res.redirect("/new")
// })

// app.listen(3002,()=>{
//     console.log('server is running')
// })

// let express=require("express")
// let app=new express()
// app.get("/",(req,res)=>{
//     let {num1,num2}=req.query
//     if(!num1||!num2||isNaN(num1)||isNaN(num2)){
//         res.send("please enter a valid number")
//     }else{
//         let sum=Number(num1)+Number(num2)
//         res.send(`The sum is ${sum}`)
//     }
// })


// app.listen(5000,()=>{
//     console.log()
// })

// let express=require("express")
// let app=new express()

// const users=[{id:1,name:"nangopan"},{id:2,name:"kalimuthu"}]
// app.use("/",(req,res)=>{
//     res.send("hello")
//     console.log(req.query)
// })
// app.use("/:id/:username/:phone",(req,res)=>{
//     res.send("hi from server")
//     console.log(req.params)
// })


// app.get("/users",(req,res)=>{
//     res.json(users)
// })
// app.get("/user/:id",(req,res)=>{
//     const userId=parseInt(req.params.id)
//     const user=users.find(user=>userId===user.id)
//     if(user){
//         res.send(user)
//     }else{
//         res.status(400).send("user not found")
//     }
// })
// app.listen(5001,()=>{
//     console.log('server running on port 5001')
// })

// let cluster=require("cluster")
// let http=require("http")

// if(cluster.isMaster){
//     cluster.fork();
//     cluster.fork()
// }else{
//     let server=http.createServer((req,res)=>{
//         if(req.url==="/fastpage"){
//             res.end("fastpage")
//         }if(req.url==="/slowpage"){
//             for(let i=0;i<6000000;i++){
//                 res.end("slow page")
//             }
            
//         }

//     })
//     server.listen(3002,()=>{
//         console.log("server is running")
//     })
// }

// let {exec}=require("child_process")
// exec("dir",(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }if(stderr){
//         console.log(stderr)
//     }
//     console.log(stdout)
// })

// let {execFile}=require("child_process")
// execFile("./new.exe",(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }if(stderr){
//         console.log(stderr)
//     }console.log(stdout)
// })

// let {spawn}=require("child_process")
// let child=spawn("dir",[])
// child.stdout.on("data",(data)=>{console.log(data)})
// child.stderr.on("data",(data)=>{console.log(data)})
// child.err.on("data",(data)=>{console.log(data)})


let express=require("express")
let app= new express()
let {fork}=require("child_process")

app.use("/",(req,res)=>{
    let child=new fork("./fork1.js")
    child.send("msg")
    child.on("msg",(sum)=>{
        res.send(sum)
    })
})
app.listen(5001,()=>{
    console.log("hi from server")
}) 