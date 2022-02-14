//require method returns a singleton object
let mongoose = require('mongoose');
//let validator = require('validator');

/*
  Defining DB Schema
*/
let empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // validate: (value) => {
        //     return validator.isAlpha(value);
        // }
    },
    address: {
        type: String,
        required: true,
        // validate: (value) => {
        //     return validator.isAlphanumeric(value);
        // }
    },
    email: {
        type: String,
        // validate: (value) => {
        //     return validator.isEmail(value);
        // }
    },
    hire_date: {
        type: Date,
        required: true,
        // validate: (value) => {
        //     return validator.isDate(value);
        // }
    },
    salary: {
        type: Number,
        required: true,
        // validate: (value) => {
        //     return validator.isNumeric(value);
        // }
    },
    project_id: {
        type: Number,
        required: true,
        // validate: (value) => {
        //     return validator.isNumeric(value);
        // }
    },
    job_title: {
        type: String,
        required: true,
        // validate: (value) => {
        //     return validator.isAlpha(value);
        // }
    },
})

module.exports = mongoose.model('Employees', empSchema);
