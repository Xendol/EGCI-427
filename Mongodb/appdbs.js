const { query } = require('express');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Product_CI2023';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('products');
  //Insert One Item
 var obj = { name: "Coffee Mug", price: 10 }
 const insertResult = await collection.insertOne(obj);
console.log('Inserted documents =>', insertResult);

//return 'done.';
      //Insert Many Items
  /*
  var obj = [ 
              { name: "Book", price: 10 },
              { name: "Pencil", price: 5 },
              { name: "Calculator", price: 40 },
              { name: "Notebook", price: 15 },
              { name: "T-Shirt", price: 20 },
              { name: "Jacket", price: 20 }
            ]
  const insertResult = await collection.insertMany(obj); 
  console.log('Inserted documents =>', insertResult);
  */
 //Find one
    //const findResult = await collection.findOne({})
  
//Find all
    //const findResult = await collection.find({}).toArray()

//Query document
   // var query = {name: "Pencil"}
   //var query = {price: 10}
   //var query = {name: /^N/}
    //const findResult = await collection.find(query).toArray()
    //console.log('Found documents => ', findResult)

    //Sorting
    //var key = {name: -1}// 1: ascending -1:descending
    //const findResult = await collection.find().sort(key).toArray()
    //console.log('Found documents => ', findResult)

    //delete
    //var query = {name: "Coffee Mug"}
    //const findResult = await collection.deleteOne(query)
    //console.log('Found documents => ', findResult)

    //deleteMany
    //var query = {name: /^C/}
    //const findResult = await collection.deleteMany(query)
    //console.log('Found documents => ', findResult)

    //UpdateOne
    //var query = {name: "Book"}
    //var newValue = {$set: {name: "EGCI Book", price: "15"}}
    //const updateResult = await collection.updateOne(query, newValue)
    //console.log('Found documents => ', updateResult)
    
    //UpdateMany
    var query = {name: /^P/}
    var newValue = {$set: {name: "Pen"}}
    const updateResult = await collection.updateMany(query, newValue)
    console.log('Found documents => ', updateResult)
  return 'done.';
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());