import mongoose from 'mongoose';

//require method returns a singleton object
let mongoose = require('mongoose');

/*
  Defining DB Schema
*/
let empSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    hire_date: Date,
    salary: Number,
    job_title: String
})

module.exports = mongoose.model('Employeer', empSchema);