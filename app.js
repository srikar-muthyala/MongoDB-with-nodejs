const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({

    name:{type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Pretty solid as a fruit!"
});

// fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});



const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "pineapple",
  score: 9,
  review: "great."
});
// pineapple.save();

// const person = new Person(
//   {
//     name:"Angela",
//     age: "32",
//     favouriteFruit:pineapple
//   }
// );

const strawberry = new Fruit({
  name: "strawberry",
  score: 8,
  review: "Sweet heaven!"
});
// strawberry.save();

const person = new Person({
  name: "bauer",
  age: 37,

});
Person.updateOne({name:"bauer"},{favouriteFruit:strawberry}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("added");
  }
});

person.save();

// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "A bit sour"
// });
//
// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 10,
//   review: "DuhMazing!"
// });

// Fruit.insertMany([kiwi, orange], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// })

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.deleteOne({
//   name: "Apple"
// }, function(err){});

// Person.deleteMany(
//   {
//     name: /bauer/
//   },
//   function(err){
//     if(err){
//       console.log(err);
//     }
//     else {
//       console.log("Deletion successful!");
//     }
//   }
// );
