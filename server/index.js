const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const port = 5000;
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
var admin = require("firebase-admin");
const { MongoClient } = require('mongodb');
require('dotenv').config()



const app = express();
app.use(cors());
app.use(bodyParser.json());


//firebase admin

var serviceAccount = require("./configs/fir-auth-44e80-firebase-adminsdk-ndd83-57d95dbcc6.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e93px.mongodb.net/sauna?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookings = client.db("sauna").collection("bookings");
  console.log("db connected successfully")

  app.post('/addBooking',(req,res)=>{
      const newBooking = req.body;
      bookings.insertOne(newBooking)
      .then(result=>{
        res.send(result);
      })
  })
  app.get('/booking',(req,res,next)=>{
    const bearer=req.headers.authorization;
    if(bearer && bearer.startsWith('Bearer ')){
      const idToken=bearer.split(' ')[1];
      getAuth().verifyIdToken(idToken)
      .then((decodedToken) => {
        const tokenEmail = decodedToken.email;
        const queryEmail=req.query.email;

        if(tokenEmail==queryEmail){
          bookings.find({email: queryEmail})
          .toArray((err,documents)=>{
            res.status(200).send(documents);

          })
        }
        else{
          res.status(401).send('Un-authorized access')
        }
      })
      .catch((error) => {
        res.status(401).send('Un-authorized access')

      });
    }
    else{
      res.status(401).send('Un-authorized access')
    }
  })
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});