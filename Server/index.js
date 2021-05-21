const express =require("express");
const app=express();
const mysql=require('mysql');


const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"ecommerce",
});

app.get("/",(req,res) =>{
    const sqlInsert=
    "INSERT INTO products(name,age,address) VALUES ('abc','male','fsd');";
    db.query(sqlInsert,(err,result)=>{
        res.send("hellow world");
    })

});
 
 
app.listen(3001,()=>{
    console.log("yes you are running port 3001");
})