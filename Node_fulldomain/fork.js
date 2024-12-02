// function longtask(){
//     sum=0;
//     for(let i=0;i<1e9;i++){
//         sum+=i;
//     }return sum
// }

// process.on("msg",(msg)=>{
//     let sum=longtask();
//     if(msg ==="start"){
//         process.send(sum)
//     }
// })


// let {execFile}=require("child_process")
// execFile("dir",(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }if(stderr){
//         console.log(stderr)
//     }else{
//         console.log(stdout)
//     }
// })

// let {execFile}=require("child_process")
// execFile("node",["--version"],(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }if(stderr){
//         console.log(stderr)
//     }else{
//         console.log(stdout)
//     }
// })

let {spawn}=require("child_process")
let child=spawn("node",["--version"],{utf-8})

child.stdout.on("data",(data)=>{
    console.log(data)
})
child.stderr.on("err",(err)=>{
    console.log(err)
})
child.on("err",(err)=>{
    console.log(err)
})