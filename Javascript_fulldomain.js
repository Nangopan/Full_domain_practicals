// let arr=[{name:'nangu',age:25,work:"unemployee"},{name:"dnesh",age:24,work:'employee'},{name:"sundar",age:25,work:"employer"}]
// arr.forEach((x)=>{
//     console.log(x)
// })

// let arr=[1,2,3,4,5,6]
// let newarr=[]
// let res=arr.forEach((x)=>{
//    return newarr.push(x*2)
// })
// console.log(newarr)

// Gives the value inside arr
// for(let val of arr){
//     console.log(val)
// }

// Gives value of index
// for(let x in arr){
//     console.log(arr[x])
// }

// map and set stores unique values
// let items=new Map();
// items.set("name","nango")
// items.set("age",25)
// items.set("name","kalimuthu")

// console.log(items.get("age"))
// console.log(items.get("name"))

// let arr=[1,2,3,2,1]
// let set=new Set(arr)
// set.add(1)
// set.add(1)
// set.add(2)
// set.add(2)
// console.log(set)
// let arr=[1,2,3,2,1]
 
//  let value=new Set(arr)
//  console.log(Array.from(value))

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
// console.log(Object.values(person)) 
// console.log(Object.keys(person)) 
// console.log(Object.entries(person))

// do while
// let i=1;
// do{
// if(i%2!=0){
//     console.log(i)
// }i++;
// }while(i<=10)

// while
// let i=1

// while(i<=10){
//     if(i%2===0){
//         console.log(i)
//     }i++
// }

// let n=1
// while(n<=10){
//     console.log(n*n);
//     n++;
// }

// generator function
// function *multiples(n){
//     let i=1;
//     while(n<=10){
//         yield n*i 
//         i++
//     }
// }
// let multi=multiples(2)
// console.log(multi.next().value)
// console.log(multi.next().value)
// console.log(multi.next().value)

// Objects methods
// Copies properties from a source object to a target object
// Object.assign(target, source)

// Creates an object from an existing object
// Object.create(object)

// Returns an array of the key/value pairs of an object
// Object.entries(object)

// Creates an object from a list of keys/values
// Object.fromEntries()

// Returns an array of the keys of an object
// Object.keys(object)

// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)

// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   const person2 = {firstName: "Anne",lastName: "Smith"};
//   console.log(Object.assign(person1,person2))

// let value=Object.entries(person1)
// for(let [key,values] of value){
//     console.log(key,values)
// }


// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
//   ];
// let value=Object.fromEntries(fruits)
// console.log(value)

// let value=Object.entries(person1)
// console.log(value)

// let value=Object.keys(person1)
// console.log(value)

// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   };
//   Object.defineProperty(person,"language",{value:"Ta"})
// console.log(person)  
// Object.defineProperty(person, "year", {value:"2008"});
// console.log(person)


// slice(start, end)
// substring(start, end)=>dont support negative index
// substr(start, length)
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.charAt(text.length-1))
// console.log(text.slice(0,-4))
// console.log(text.substring(-5))
// console.log(text.substr(-26,3))
// let text1 = "Hello";
// let text2 = "byee World Hello";
// console.log(text1.concat(text2))
// console.log(text2.trimEnd())

// console.log(text1.padEnd (or)padStart(7,"e"))(length,value to be added as string)
// console.log(text1.repeat(4))
// console.log(text2.replace("Hello","Bollo"))
// console.log(text2.split(" "))
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits1 = ["Ban", "Ora", ["juice","innermango","innoru apple"], "Man"];
// console.log(fruits.join())
// fruits.pop()
// console.log(fruits);
// fruits.push("Mangoo")
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// fruits.unshift("bunaana")
// delete fruits[0]
// console.log(fruits);
// console.log(fruits.concat(fruits1));
// console.log(fruits1.flat())
// console.log(fruits.copyWithin(1,0));
// console.log(fruits.slice(1,4))
// let text2 = "byee World Hello";
// console.log(text2.slice(1,4))
// fruits.splice(2,2,"lemon","guava")
// console.log(fruits);

// Map
// let arr=[1,2,3,4,5]
// let value=arr.map((x)=>{
//     return x/2
// })
// console.log(value)
// filter
// let value=arr.filter((x)=>{
//     if(x%2==0){
//         return x;
//     }
// })
// console.log(value)
// let sum=arr.reduce((acc,curr)=>{
   
//    acc=acc+curr
//    return acc;
// },0)
// console.log(sum)

// max using reduce
// let max=arr.reduce((acc,curr)=>{
//     if(curr>acc){
//        acc=curr
//        return acc;
//     }
// },0)
// console.log(max)

// callbacks
// function x(){
//     console.log("hiii")
//   }
//   function y(x){
//     x();
//   }
//   y(x)

// currying
// function sum(a){
// return function x(b){
//     return function y(c){
//         return a+b+c;
//     }
// }
// }
// console.log(sum(1)(2)(3))

// closures
// function x(){
//     let a=10;
//     function y(){
//        console.log(a)
//     }
//     y();
// }
// x(y)


// let obj={
//     name:"nangopan",
//     age:25,
    
  
// }
// function personals(msg){
//     console.log(msg+" "+this.name)
// }
// personals.call(obj,"Hello")
// personals.apply(obj,["Hello"])
// const needed=personals.bind(obj,["You Called me!"])
// needed()

// promises
// function sum(a,b){
//     const pr=new Promise((res,rej)=>{
//         let sum=0;
//         if(typeof(a)=== "number" && typeof(b)=== "number"){
//             sum=a+b;
//             res(sum)
//         }else{
//             rej("Invalid type")
//         }
//     })
// return pr;}
// sum("hiiii",5).then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})


// function isEven(a){
//     const pr=new Promise((res,rej)=>{
//         if(a%2==0){
//             res("true")
//         }else{
//             rej("false")
//         }

//     });
//     return pr;}
//     isEven(10).then((x)=>{console.log(x)}).catch((x)=>{console.log(x)})

// setTimeout(()=>{console.log("hii")},5000);

// async await
// const pr=new Promise((res,rej)=>{
//     setTimeout(()=>{res("promise")},5000)
// })
// async function test(){
// const waitingPr=await pr;
// console.log("HelloBuddy")
// console.log(waitingPr)

// }
// test()


// promises types
// const p1=new Promise((res,rej)=>{
    // setTimeout(()=>{rej("p1 failed")},2000);

    // rej("p1 failed")
// })

// const p2=new Promise((res,rej)=>{
    // setTimeout(()=>{rej("p2 failed")},1000);

    // rej("p2 failed")
// })

// const p3=new Promise((res,rej)=>{
//     setTimeout(()=>{res("p3 sucess")},5000);

    // rej("p3 failed")
// })

// Promise.all([p1,p2,p3]).then((data)=>{console.log(data)}).catch((rej)=>{console.log(rej)})

// Promise.allSettled([p1,p2,p3]).then((data)=>{console.log(data)}).catch((rej)=>{console.log(rej)})

// Promise.race([p1,p2,p3]).then((data)=>{console.log(data)}).catch((rej)=>{console.log(rej)})

// Promise.any([p1,p2,p3]).then((data)=>{console.log(data)}).catch((rej)=>{console.log(rej)})


// Prevents re-assignment
// const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
// Object.preventExtensions(object)

// Returns true if properties can be added to an object
// Object.isExtensible(object)

// Prevents adding and deleting object properties
// Object.seal(object)

// Returns true if object is sealed
// Object.isSealed(object)

// Prevents any changes to an object
// Object.freeze(object)

// Returns true if object is frozen
// Object.isFrozen(object)

// const person = {firstName:"John", lastName:"Doe",other:{place:"sirumugai",district:"coimbatore"}};

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);
// delete person.firstName
// person.place="Nangu";
// person.other.district="Nangu";
// const value=Object.isFrozen(person)
// console.log(value)
// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// let newArr=[...arr1,...arr2,9,10,11]
// // console.log(newArr)
// const std={name:"nangu",lastname:"kalimuthu"}
// const stdInfo={age:25,place:"Coimbatore"}
// const studentAll={...std,...stdInfo}
// console.log(studentAll)
// const str="I am gonna split into pieces"
// const res=[...str]
// console.log(res)
// function isMultiplied(...values){=>rest parameter
//     let num=0;
//     for(let i=0;i<values.length;i++){
//            num=num+values[i]
//     }
//     return num;
// }
// console.log(isMultiplied(...arr1=>spread operator

// optional chaining and nullish collision
// let obj={
//     name:"nangu",
//     surname:"kalimuthu",
//     age:24,
// OtherDetails:{
//         place:{
//             district:"Coimbatore",
//             Taluk:"Mettupalayam"
//         }
//         }
// }
// console.log(obj?.OtherDetails?.place?.district??"May i come in")

// falsy values={null,undefined,0,-0,false,Document.all,"",Nan}

// IIfe
// (function iife(){
//     console.log("From IIFE")
// })()

// type coersion & type conversion
// console.log(1+5)
// console.log(1+"5")
// console.log(1-5)
// console.log(1-"5")
// console.log("1"-"5")
// console.log(1*5)
// console.log(1*"5")
// console.log(1-5+5)
// console.log(1-5+"5")
// console.log(1*2+"5"-3+6*1+"3")
// console.log(Number("1")+5)
// console.log(String(1)+5)
// console.log("hii"*2)

// getters and setters
// let details={
//     firstName:"Nangopan",
//     lastName:"Kalimuthu",
//     get fullname(){
//      console.log(`My name is ${this.firstName} ${this.lastName}`);
//     },
//     set fullname(values){
//      const value=values.split(" ");
//      this.firstName=value[0];
//      this.lastName=value[1]??"";
//     }
// }
// details.fullname="Kalimuthu Karuppusamy"
// details.fullname

// Error Handling
// try{
//     console.log(ans)
// }catch{
//     console.log("I am error")
//     // throw new Error("not there")
// }finally{
//   console.log("I will be repeating Everytime")
// }


// console.log(ans)
//  ---------------------------------------------------------------------------------------------------------------------------------------------------------

// const arr=[1,2,3,8,0]
// let temp=0;
// let newArr=[]
// for(let i=0;i<arr.length;i++)
//     for(let j=i+1;j<arr.length;j++){
//     if(arr[i]<arr[j]){
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
// }
// console.log(arr[0])
// const arr=[0,1,9,3,2]
// let flar=0;
// let slar=0;
// let tlar=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>flar){
//         tlar=slar;
//         slar=flar;
//         flar=arr[i];
//     }else if(arr[i]>slar){
//         tlar=slar;
//         slar=arr[i]
//     }else if(arr[i]>tlar){
//         tlar=arr[i]
//     }
// }
// console.log(flar,slar,tlar)

// delete duplicate or print unique
// const arr=[1,1,3,3,4,4,5,5,0]
// let uniq=new Set(arr);
// console.log(uniq)


// let arr=[1,1,2,2,3,0]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){            
//                 arr[j]=arr[j+1];
//             j--;
//             arr.length--;
//         }

//     }}
//     console.log(arr)


//     let arr = [1, 1, 2, 2, 3, 0];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             arr.splice(j, 1); // Remove duplicate
//             j--; // Adjust `j` after removal
//         }
//     }
// }
// console.log(arr);


// let str="Hello";
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     rev=rev+str[i];
// }
// console.log(rev)

// reverse an array
// let arr=[1,2,3,4,5]
// let newArr=[]
// let val=0
// for(let i=arr.length-1;i>=0;i--){
//    newArr[val]=arr[i]
//    val++;
// }
// console.log(newArr)

// palindrome
// let str="malayalam"
// let j=str.length-1;
// for(let i=0;i<str.length/2;i++){
//     if(str[i]!=str[j]){
//         return console.log("false");
//     }j--;}
//          console.log("true");
    
// fatorial
// function factorial(n){
//     let fac=1;
//     for(i=1;i<=n;i++){
//         fac=fac*i
//     }return fac;
// }
// console.log(factorial(5))

// function factorial(n){
//     let num=1
//     if(n===0)
//         return 1
//     else
//      num=n*factorial(n-1)
//     return num;
// }
// console.log(factorial(5))

// // fibonaci
// function fib(n){
//     if(n<2){
//         return 1
//     }else{
//         return fib(n-1)+fib(n-2)
//     }
// }
// console.log(fib(8))

// anagram
// let str1="lisren"
// let str2="silent"

// function anagram(str1,str2){
// if(str1.split("").sort().join()===str2.split("").sort().join()){
//     return true
// }return false;
// }
// console.log(anagram(str1,str2))

// reverse an array
// let str="hello I am Nangopan"
// function rev(str){
//     let value=str.split(" ").reverse().join(",")
//     return value
// }
// console.log(rev(str))

// frequency of elements

// const arr = [4,5,6,4,3,66,44,9]

// let obj={};

// for(let x of arr){
//     if(obj[x]){
//         obj[x]++;
//     }else{
//         obj[x]=1
//     }
// }
// console.log(obj)

// // first letter alone capital
// let str="i am nangopan"
// let newS=""

// function caps(str){
//     for(let i=0;i<str.length;i++){
//     if( i===0||str[i-1]===" "){
//         newS=newS+str[i].toUpperCase()
//     }else{
//         newS=newS+str[i]
//     }
//     }return newS;
// }
// console.log(caps(str))


// function* generateMultiplesof4(){
//     let number = 4
//     while(true){
//         yield number
//         number +=4
//     } 
// }
// const multiplesOf4 = generateMultiplesof4()
// console.log(multiplesOf4.next().value)
// console.log(multiplesOf4.next().value)

// longest word in string
// let str="my name is nangopan"
// let newstr=str.split(" ")
// let longest=newstr[0]

// for(let i=0;i<newstr.length;i++){
//     if(longest.length<newstr[i].length)
//     longest=newstr[i]
// }
// console.log(longest)

// function removeVowels(str){
//     return str.replace(/[aeiouAEIOU]/g,'')
// }
// console.log(removeVowels('Augmentation'))

// let str="helloboys"

// let val=str.replace(/[aeiouAEIOU]/g,"f")
// console.log(val)


// let str="hello"

// function vowelsTest(str){
//     if(/[aeiouAEIOU]/.test(str)){
//         return console.log("true");
//     }else{
//         return console.log("false");
//     }
// }
// vowelsTest(str)


// count of vowels
// let vowels="aeiouAEIOU"
// let str="ihelloo"
// let count=0
// for(let i=0;i<vowels.length;i++){
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }
// console.log(`the string contains ${count} vowels`)


// let str="naan thaan da little star aaven da superstar"
// let char="a"
// function charCount(str,char){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//     if(str[i].toLowerCase()===char.toLowerCase()){
//         count++;
//     }
// }
// return count;    
// }
// console.log(charCount(str,char))

// remove duplicates from string
// let str="nangopan"
// let value=str.split("")
// let newArr=new Set(value)

// console.log([...newArr])


//  function searchSubstr(str,substr){
//     let index=str.indexOf(substr)
//     if(index !==-1){
//         return console.log(`Subtring '${substr}' found at index ${index+1} of the given string`)
//     }
//     else{
//         return console.log(`Substring not found in the given string`)
//     }
// }

// searchSubstr('My name is sathish','i')
// let name="my name is sathish"
// console.log(name.indexOf("i"))


// sum of numbers in a collection of different datatypes
// let arr=[4,1,'3',obj={},function(){},5,1]
 
// let value=arr.reduce((acc,curr)=>{
//     if(typeof(curr)==="number"){
//         acc=acc+curr
//     }
//     return acc;
// },0)
// console.log(value)


// deep clone
// let obj={
//     name:"Nangopan",
//     otherDetails:{
//         place:"sirumugai",
//         pin:641302
//     }
// }
// // let value=obj
// // value.name="Basha"
// let deepCloned=structuredClone(obj)
// deepCloned.name="Basha"
// console.log(obj)

// --------------------------------------------------------------
// deepfreeze
// function deepFreeze(obj){
//     if(typeof(obj)==="object"){
//         Object.freeze(obj)
    
//     Object.keys(obj).forEach((key)=>{
//         deepFreeze(obj[key])
//     })}
//     return obj
// }
// let obj1={
//     name:"nangu",
//     vayadhu:{
//         age:25,
//         location:{
//             village:"sirumugai"
//         }
//     }
// }
// deepFreeze(obj1)
// obj1.vayadhu.location.village="mtp"
// console.log(obj1)

// ------------------------------------------------------------------------------------------------
// function* generator(num){
    
//     yield num;
//     num++;
//     yield num;
//     num++;
//     yield num;
// }
// let generate=generator(0)
// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)

// function* multiples(){
//     let num=4
//     while(true){
//         yield num;
//         num+=4
//     }
// }
// let multi4=multiples()
// console.log(multi4.next().value)
// console.log(multi4.next().value)

// unique characters characters
// let str="hellooooooohhhhhheeeeeoo"

// let value=str.split("")
// // console.log(value)
 
//  let newVal=new Set(value)
// console.log(Array.from(newVal))


// non repeating in a string
// const str = 'hellolh'

// function nonRepeat(str){
//     let unique=[]
//     let sortedStr=str.split("").sort().join("")
//     for(let i=0;i<str.length;i++){
//         if(sortedStr[i]!=sortedStr[i+1]&&sortedStr[i]!=sortedStr[i-1]){
//             unique.push(sortedStr[i])
//         }  
//     }
//   return unique.join(",")
// }

// console.log(nonRepeat(str))
// ---------------------------------------------------------------------------------------------------------
// Largest 1st 2nd 3rd
// let arr=[5,4,1,3,0]
// function largest(arr){
//     let flar=0
// let slar=0
// let tlar=0
// let newArr=[]
//     for(let i=0;i<arr.length;i++){
//     if(flar<arr[i]){
//         tlar=slar;
//         slar=flar;
//         flar=arr[i];
//     }else if(slar<arr[i]){
//         tlar=slar;
//         slar=arr[i];
//     }else if(tlar<arr[i]){
//         tlar=arr[i]
//     }
//     } return console.log(flar,slar,tlar)
// }
// largest(arr)

// -------------------------------------------------------------------------------------------------

//  sum of array
// let arr=[1,2,3,4]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum)
// --------------------------------------------------------------------------------------------------
// arr empty or not
// function arrCheck(arr){
//     if(arr.length==0){
//         return "Its empty"
//     }else{
//         return "Not an empty array"
//     }
// }
// let arr=[1,2,3,4,5]
// console.log(arrCheck(arr))
// -----------------------------------------------------------------------------------------------
// add element 
// let arr=[1,2,3,4,5]
// let a=1
// let b=2
// function add(arr,a,b){
//   arr.push(a,b)
//   return arr
// }
// console.log(add(arr,6,7))

// -------------------------------------------------------------------------------------------------
// delete an element
// let arr=[1,2,3,4,5]
// let val=3
  
// function deleted(arr,val){
//     let indexedVal=arr.indexOf(val)
//     arr.splice(val,1)
//     return arr
// }
// console.log(deleted(arr,val))

// ---------------------------------------------------------------------------------------------
// let arr=[1,1,2,2,4,5,5]
// function duplicates(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 for(let k=j;k<arr.length;k++){
//                   arr[k]=arr[k+1]  
//                 }j--;
//                 arr.length--;
//             }
//         }
//     }return arr
// }
// console.log(duplicates(arr))

// -----------------------------------------------------------------------------------------------
// intersection
// const test1=[9,18,1,2,3,4,1,2,4,9]
// const test2=[1,18,4,5,0,9,2,6,9]
// function conjunc(arr1,arr2){
//     let arr=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]&& !arr.includes(arr1[i])){
//                 arr.push(arr1[i])
//             }
//         }
//     }
//    return arr 
// }
// console.log(conjunc(test1,test2))
// console.log(test1.includes(100))
// -----------------------------------------------------------------------------------------------
// concat arrays using spread
// const test1=[9,18,1,2,3,4,1,2,4,9]
// const test2=[1,18,4,5,0,9,2,6,9]
// let value=[...test1,...test2]
// console.log(value)
// --------------------------------------------------------------------------------------------------
// remove duplicates
// const test1=[9,18,1,2,3,4,1,2,4,9]
// let newArr=[]
// for(let i=0;i<test1.length;i++){
//     if(!newArr.includes(test1[i])){
//     newArr.push(test1[i])}
// }
// console.log(newArr)
// ------------------------------------------------------------------------------------------------

// let arr=[11,15,10,21,11,15,9,25]
// arr.sort()
// let unique=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=arr[i+1]&&arr[i]!=arr[i-1]){
//         unique.push(arr[i])
//     }
// }
// console.log(unique)
// console.log(arr)
// ---------------------------------------------------------------------------------------------------
// sum of prime numbers using reduce
// const arr = [1, 2, 3, 4,11];

// function isPrime(num){
//     if(num<2){
//         return false
//     }else{
//         for(let i=2;i<num;i++){
//             if(num%2===0){
//                 return false
//             }
//         }
//     }return true
// }
// const value=arr.filter(isPrime).reduce((acc,curr)=>{return acc+curr})

// console.log(value)
// ----------------------------------------------------------------------------------------
// second largest using reduce
// const arr=[1,2,3,5,4]
// let value=arr.reduce((acc,curr)=>{
//     let [flar,slar]=acc
//     if(curr>flar){
//     return [curr,flar]}
//     if(curr>slar){
//         return [flar,curr]
//     }
//     return acc
// },[0,0])
// console.log(value[1])
// ----------------------------------------------------------------------------------------------
// length of object properties
// let obj1={
//     name:"nangopan",
//     age:25
// }
// console.log(Object.keys(obj1).length)
// -------------------------------------------------------------------------------------------------
// Object constructor
// function Person(name,age,place){
//     this.Name=name
//     this.Age=age
//     this.Place=place
// }
// let myDetails=new Person("nangopan",24,"Sirumugai")

// console.log(myDetails)

// ---------------------------------------------------------------------------------------------------
// classes
// class Person{
//     constructor(fname,lastname,age){
//         this.Firstname=fname
//         this.Lastname=lastname
//         this.Age=age
//     }
//     getname(){
//         console.log(`My name is ${this.Firstname} ${this.Lastname} and my age is ${this.Age}`)
//     }
// }
// let myName=new Person("nangopan","kalimuthu",24)
// myName.getname()

// ----------------------------------------------------------------------------------------

// check if property exists in an object
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }
// console.log('name' in person)

// ----------------------------------------------------------------------------------------
// seal 
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// Object.seal(person)
// person.nationality='Indian'
// person.location='Thanjavur'
// console.log(person)

// ----------------------------------------------------------------------------------------
// freeze
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }
// 
// Object.freeze(person)
// person.nationality='Indian'
// person.location='Thanjavur'
// console.log(person)
// --------------------------------------------------------------------------------------
// Spread prpoerties
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// const person2={
//     ...person,
//     location:'Thanjavur'
// }
// console.log(person2)
// ---------------------------------------------------------------------------------------------

// 8]Create method that access object properties
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// person.detail=function(){
//     return 'Iam '+this.name+' and I am '+this.age
// }

// console.log(person.detail())
// ----------------------------------------------------------------------
// Destructure properties into variables
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// const {name,age,company}=person
// console.log(name)

// ---------------------------------------------------------------------------
// shallow and deep clone or copy
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:{
//         place:"thanjavur",
//         others:{
//             taluk:"dont know",
//             village:"also dont know"
//         }
//     }
// }
// 
// shallow copy
// let person1={...person}
// // deep copy
// // person1=structuredClone(person)

// person1.location.place="sirumugai"
// console.log(person)
// ----------------------------------------------------------------------------------------
// sort in decending or ascending using sort()
// let arr=[1,11,2,22,3,33]
// arr.sort((a,b)=>b-a)
// console.log(arr)
// ------------------------------------------------------------------------------------
// sort and array nested obj
// var details=[
//     {name:"Vignesh",class:"12th",score:90,status:"PASS"},
//     {name:"Abin",class:"12th",score:91,status:"PASS"},
//     {name:"Nithina",class:"12th",score:85,status:"PASS"},
//     {name:"Logesh",class:"12th",score:96,status:"PASS"},
//     {name:"Harish",class:"12th",score:73,status:"PASS"},
// ]

// details.sort((a, b) => b.score - a.score);
// console.log(details[2].name);
// --------------------------------------------------------------------------------------------------------
// short circuiting 
// let x;
// let y="hi"
// let z="hello"

// let name=x||y||z
// console.log(name)

// let age=25;
// let vayadhu=45
// function x(){
//     console.log("hello")
// }
// let name=(age<30)&& (vayadhu>50)&&x()
// console.log(name)
// ---------------------------------------------------------------------------------------------------------------------------------
// let mymap=new Map([["name","nango"],["age",2]])
// mymap.set("name","nango")
// console.log(mymap.keys())
// console.log(mymap.values())
// console.log(mymap.entries())
// console.log(mymap.get("name"))
// mymap.clear()
// mymap.has()
// mymap.delete("name")
// mymap.size

// let obj={}
// let myweakmap=new WeakMap()
// myweakmap.set(arr,"nangu")
// console.log(myweakmap.arr)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// pure function

// function sum(a,b){
//     return a+b;
// }
// const result=sum(1,2)
// console.log(result)

// impure functions

// let arr=[1,2,3]
// function add(arr,a){
//     return arr.push(a)
// }
// add(arr,4)
// console.log(arr)

// best practice
// let arr=[1,2,3]
// function add(arr,a){
//     return [...arr,a]
// }
// add(arr,4)
// console.log(add(arr,4))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// constructor functions
// function Person(name,age){
//     this.name=name
//     this.age=age
//     this.myname=function(){
//         return `my name is ${name} and my age is ${age}`
//     }
// }
// let res=new Person("nangu",25)
// console.log(res.myname())
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// factory functions

// function info(name,age){
//     return {
//         name:name,
//         age:age,
//         mydetails(name,age){
//             return `my name is ${this.name} and my age is ${this.age}`
//         }
//     }
// }
// let value=info("nangu","25")
// console.log(value.mydetails())

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// flatting array

// let arr=[1,[1,2,[3]],4,5,[6]]
// console.log(arr.flat(2))

// function flatt(arr){
    
//     const isFlatted = (arr)=> {
//         for(let i of arr){
//             if(typeof(i) != 'number'){
//                 return false
//             }
//         }
//         return true
//     }
    
//     if(isFlatted(arr)) {
//         return arr
//     }
    
//     let result = []
    
//     for(let i of arr){
//         if(typeof(i) !== 'number'){
//             result.push(...i)
//         }else{
//             result.push(i)
//         }
//     }
    
//     return flatt(result)
// }

// console.log(flatt(arr))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// classes
// class Mydetails{
//     name="nangopan"
//     print(){
//         console.log(`My name is ${this.name}`)
//     }
// }
// let res=new Mydetails()
// res.name="mukundhu"
// res.print()

// ----------------------------------------------------------------------------------------------------------
// callbackhell
// let cart=["x","y","z"]

// api.createOrder(cart,function(){
//     api.paymentInfo(function(){
//         api.showordersummary(function(){
//             api.updatewallet()
//         })
//     })
// })


// call by value and call by reference
// let a={value:10};
// let b=a;

// a.value=55
// console.log(a,b)

// let a=10;
// let b=a;
// a=55

// console.log(a,b)


// currying using bind
// function multiply(x,y){
//     console.log(x*y)
// }
// multiplyBy2=multiply.bind(this,2)
// multiplyBy3=multiply.bind(this,3)
// multiplyBy2(2)
// multiplyBy3(2)


// function mydetails(name,age){
//     this.name=name
//     this.age=age
//     this.details=function(){
//         return `my name is ${this.name} and my age is ${this.age}`
//     }
// }
// let value=new mydetails("nangopan",25)
// console.log(value.details())


// class Mydetails{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     details(){
//         return `my name is ${this.name} and my age is ${this.age}`
//     }
// }
// let value=new Mydetails("nangopan",28)
// console.log(value.details())



// function mydetails(name,age){
//     return {
//         name:name,
//         age:age,
//         details:function(){
//             return `my name is ${this.name} and my age is ${this.age}`
//         }
//     }
// }
// let value=mydetails("nangopan",25)
// console.log(value.details())


// let  pr=new Promise((res,rej)=>{
//     setTimeout(()=>{res("3 sec")},3000)
// })
// async function test(){
// let res=await pr
// console.log(res)
// setTimeout(()=>{
//     console.log("check")
// },5000)
// console.log('hiiii')
// }
// test()


// class Info{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     info(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`)
//     }
// }
// let student=new Info("radha",25)
// // student.printdetails()
// class College extends Info{
//     constructor(name,age,year){
//       super(name,age)
//       this.year=year
//     }
//     info(){
//         return super.info()+console.log(`studying ${this.year} year`)
//     }
// }
// let cllgstudent=new College("malathi",24,"third")
//  cllgstudent.info()

let fn=new Function("name","age","return `I am ${name} and my age is ${age}`")
console.log(fn("nangopan","25"))