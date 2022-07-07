const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    Address: {
        type: String,
        required: false
    },
    dateofbirth:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    Online: {
        type: Boolean,
        required: false
    },
    Fees: {
        type: String,
        required: false
    },
    Degree:[{
        Name: {
            type: String,
            required: false
        },
        Institute: {
            type: String,
            required: false
        },
        Duration: {
            type: String,
            required: false
        },
        
    }],
    Specialization: {
        type: String,
        required: false
    },
    review:[{

        patientName: {
            type: String,
            required: false
        },
        rating: {
            type: Number,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        date: {
            type:Date,
            required: false
        },
        
    }],
  

 })

 // We are hashing Password
 doctorSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();

})


const doctor = mongoose.model('Doctor', doctorSchema);

module.exports = doctor;