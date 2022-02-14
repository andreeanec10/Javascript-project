let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true,
        // validate: (value) => {
        //     return validator.isAlpha(value);
        // }
    },
    start_date: {
        type: Date,
        required: true,
        // validate: (value) => {
        //     return validator.isDate(value);
        // }
    },
    planned_end_date: {
        type: Date,
        required: true,
        // validate: (value) => {
        //     return validator.isDate(value);
        // }
    },
    description: {
        type: String,
        required: true,
        // validate: (value) => {
        //     return validator.isAlpha(value);
        // }
    },
    project_code: {
        type: String,
        required: true,
        // validate: (value) => {
        //     return validator.isAlpha(value);
        // }
    },
})

module.exports = mongoose.model('Projects', projectSchema);
