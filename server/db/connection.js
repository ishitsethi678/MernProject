const mongoose =require('mongoose');

const mongoDb = process.env.DATABASE;

mongoose
  .connect(mongoDb)
  .then(() => {
    console.log(`connection sucessfull`);
  })
  .catch((err) => {
    console.log(err);
    console.log("connection failed");
  });
