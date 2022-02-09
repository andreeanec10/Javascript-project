import mongoose from 'mongoose';

//require method returns a singleton object
let mongoose = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'Employees';

class Database {
    constructor() {
      this._connect()
    }
    
  _connect() {
       mongoose.connect(`mongodb://${server}/${database}`)
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }

//we have a singleton connection
module.exports = new Database();
