const express = require ("express")

require ("./db/mongoose")
const Person = require("./models/person")

const app = express()
app.use(express.json())

//Create record person using the person model and save in to the database
// let person = new Person({
//     name:"ouss kamal",
//     age:19,
//     favoriteFoods:["Banan","Cheese"]
// });

// person 
// .save()
// .then((doc)=>{
//     console.log("person is:")
//     console.log(doc)
// })
// .catch((err)=> console.error(err))

//Create Many Records with models.create()
//Array of People
//  let arrayOfPeople =[
//     {
//         name:"Oma",
//         age:15,
//         favoriteFoods:["fish","Soupe"]
//     },
//     {
//         name:"Anaa",
//         age:6,
//         favoriteFoods:["fish","Soupe"]
//     }
// ];

//add the array to the database using person.create
// Person.create(arrayOfPeople,(err,data)=>{
//     if (err) {
//         Person(err);
//     }
//     Person(data);
// })

// Use person.find() to Search on database all person
// let x="Ali"
// Person
//         .find({ name:x })
//         .then((doc)=>{
//             console.log("Finding person")
//             console.log(doc);
//         })
    
//         .catch((err)=> console.error(err))     

//uSE MODELS.FINDoNE() to return asingle matching document from database
// the food argument
// Person
//         .findOne( {favoriteFoods :["fish","Soupe"]})
//         .then((doc)=>{
//             console.log("In findOne")
//             console.log(doc);
//         })
    
//         .catch((err)=> console.error(err))  
        
// Use model.findById() to Search Your Database By _id
// Person
//     .findById({ _id: '601d12539ca3061f68b295b9' })
//     .then((doc) => {
//         console.log("In findById: ")
//         console.log(doc)
//     })
//     .catch((err) => console.error(err))

// Perform Classic Updates by Running Find, Edit, then Save
// Person
//     .findById({ _id:'601d12539ca3061f68b295b9' })
//     .then((doc) => {
//         doc.favoriteFoods.push("hamburger")
//         doc.save();
//         console.log(doc);
//     })
//     .catch((err) => console.error(err));

//Perfrm New Update on a document Using models.findAndUpdate()
// Person.findOneAndUpdate({age: 19},{$set:{name:"NOt"}},{new:true},(err,doc)=>{
//     if (err) {
//         console.log("Somthing is wrong")
//     }
//     console.log("In find One and Update");
//     console.log(doc);
// })

// Person.remove({name: "Ania"},{new:true},(err,doc)=>{
//     if (err) {
//         console.log("Somthing is wrong")
//     }
//     console.log("In find One and Update");
//     console.log(doc);
// })

// Delete One Document Using model.findByIdAndRemove
//  Person
//    .findByIdAndRemove({ _id: '601d12539ca3061f68b295b8' })
//     .then((doc) => {
//          console.log(doc);
//      })
//    .catch((err) => console.error(err));
// MongoDB and Mongoose - 
//Delete Many Documents with model.remove() with name Ania
Person
    .remove({ name: 'Anaa' })
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => console.error(err));

// Use person.find() to Search on database  trier par age all person
// 
//  Person
//        .find().limit(2).select("name age").sort({age: 1}).exec((err,doc)=>{
//         if (err) {
//                    console.log("Somthing is wrong")
//                 }
//                console.log("In find One and Update");
//               console.log(doc);
//              })

// Use person.find() to Search on database  trier par age all person
Person
.find({ favoriteFoods : {"$in": ["Banan"]} } ).limit(2).select("name age").exec((err,doc)=>{
 if (err) {
            console.log("Somthing is wrong")
         }
        console.log("In find One and Update");
       console.log(doc);
      })



module.exports=app