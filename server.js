//pour tester le fichier produits.json tout en allant dans le navigateur "localhost:8888(le port sur le quel il ecoute" /produits 
//faut pas oublier d'executer le serveur directement dans la cmd node server.js

const express = require('express'); /*require import le module ou objet "express" ; comme import dans python*/
const app = express(); /*nouvel objet pour permet d'avoir notre server*/ 

//Pour eviter les problemes de corse 
app.use(function ( req , res , next){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin" ,'*');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
    res.setHeader("Access-Control-Allow-Headers", '*');
    next();
});
const MongoClient = require('mongodb').MongoClient;
const url         = "mongodb://localhost:27017"

//on vas importer le module express ou la fonction use exsite 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

MongoClient.connect(url,{useNewUrlParser: true}, (err , client) => {
    let db = client.db("SUPERVENTES");

  
    //cette partie est un web service ou on avoir nos reqeuttes http 

    //avec la méthode get il va affiché 
    app.get("/produits", (req,res) => {
        console.log("route : /produits");
        //cette fonction est une fonction callback
        db.collection("produits").find().toArray((err , documents) => {
            //cette methode transforme les données du doc en string
            res.end(JSON.stringify(documents));
        });
    }) ;


//pour plus de specification par exmeple ici on a pris le nom , dans le navigateur on met localhost:8888/produits/poudre (dans mon cas) ici on a utilisé un GET
app.get("/produits/:nom" , (req,res) => {
    console.log("route : /produits");
    db.collection("produits").find({"nom":req.params.nom}).toArray((err,documents) => {
        res.end(JSON.stringify(documents));
    } )
})

//faire un web service avec un POST (pour l'ajour d'un produit on a utilisé insterone car il y'a qu'un seul produit a ajouter )
app.post("/produit" , (req,res) => {
    console.log("route : /produit avec "+JSON.stringify(req.body));
    try {
        db.collection("produits").insertOne(req.body);
        res.end(JSON.stringify({"message " : "ajout de produit effectué"}));
    }catch(e){
        res.end(JSON.stringify({"message ":"probléme sur l'ajout de produit:"+ e }));
    }
})




//pour le navigateur pour utilisation du port
app.listen(8888);

}) 
