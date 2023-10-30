const dotenv=require("dotenv");
// const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const app = express();


dotenv.config({path:'./config.env'});
require(`./db/connection`);
// const User=require(`./model/userSchema`);

//middleware data comming should be converted into json
app.use(express.json());

app.use(cors()); 


//we link the router file in app.js
app.use(require(`./router/auth`));


const PORT =process.env.PORT;
// const middleware = (req, res, next) => {
//   console.log(`hello my middleware`);
//   next();
// };

// middleware();



// app.get("/about", (req, res) => {
//   console.log(`hello my about`);
//   res.send(`hello about from server`);
// });

// app.get("/contact", (req, res) => {
//   res.cookie("Test",'thapa');
//     res.cookie("Test",'thapa');

//   res.send(`hello contact from server`);
// });

// app.get("/signin", (req, res) => {
//   res.send(`hello signin from server`);
// });

// app.get("/signup", (req, res) => {
//   res.send(`hello signup from server`);
// });

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});

