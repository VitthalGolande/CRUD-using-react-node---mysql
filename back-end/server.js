const express =require('express')
const mysql = require ('mysql')
const cors =require('cors')

const app=express();
app.use(express.json())
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Str0ng!Password",
    database:"nodejss"
})


app.get("/login", (req, res)=>{
    const sql= "select * from crud";
    db.query(sql, (err, data)=>{
        if (err) return res.json("error")
        return res.json(data)
    })
})

app.post('/create', (req,res)=>{
    const sql="insert into crud (`name`,`email`) values (?)";

    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) =>{
        if (err) return res.json("Error")
            return res.json(data)
    })
})

app.put('/update/:id', (req,res)=>{
    const sql="update crud set `name`=?, `email`=? where id= (?)";

    const values=[
        req.body.name,
        req.body.email
    ]

    const id=req.params.id;
    
    db.query(sql, [...values, id], (err, data) =>{
        if (err) return res.json("Error")
            return res.json(data)
    })
})


app.delete('/student/:id', (req,res)=>{
    const sql="delete from crud where id= (?)";

    const id=req.params.id;
    
    db.query(sql, [id], (err, data) =>{
        if (err) return res.json("Error")
            return res.json(data)
    })
})




app.listen(8082, ()=>{
    console.log("Listening......");
})