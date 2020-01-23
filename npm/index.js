const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const MongoClient = require ('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const DBUrl = "mongodb://127.0.0.1:27017/";
const DBName = "blink";

let dbo = null;
MongoClient.connect(DBUrl,(error, db)=>{
    if(error) throw error;
    dbo=db.db(DBName);
});


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/siswa',(request,response)=>{
    dbo.collection("siswa").find().toArray((err,res)=>{
        if (err) throw err;
        response.json(res);
    })
})

app.get('/siswa/:id',(request,response)=>{
    let id = request.params.id;
    let id_object = new ObjectID(id);

    dbo.collection("siswa").findOne({"_id": id_object},(error,result)=>{
        if(error) throw error;
        response.json(result);
    })
})

app.post('/siswa',(request,response)=>{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    dbo.collection("siswa").insertOne({
        nama: namaSiswa,
        alamat: alamatSiswa
    },(err,res)=>{
        if(!err){
            response.json(res);
        }else{
            throw err;
        }
    })
})


app.delete('/siswa/:id',(request,response)=>{
    let id = request.params.id;
    let id_object = new ObjectID(id);

    dbo.collection("siswa").deleteOne({
        _id : id_object
    },(err,res)=>{
        if(err) throw err;
        response.json(res);
    })
})



app.put('/siswa/:id',(request,response)=>{
    let id = request.params.id;
    let id_object = new ObjectID(id);
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    dbo.collection("siswa").updateOne({
        "_id" : id_object
    },{$set:{
        nama: namaSiswa,
        alamat: alamatSiswa
    }},(err,res)=>{
        if(err) throw err;
        response.json(res);
    })
})

app.listen('8080',(e)=>{
    console.log(e);
    
})