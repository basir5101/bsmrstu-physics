const mongoose = require ('mongoose');


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [40, 'Name cannot be more than 40 character']
    },
    studentId: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        unique: true,
        maxlength: [40, 'Name cannot be more than 40 character']
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email'],
        required: [true, 'Please add a name'],
        trim: true,
        unique: true,
        maxlength: [40, 'Name cannot be more than 40 character']
    },
    batch: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [10, 'Name cannot be more than 10 character']
    },

}, { timestamps: true })



// if (!modelAlreadyDeclared()) {
//     module.exports = mongoose.models.Students || mongoose.model('Students', StudentSchema)
// }

// function modelAlreadyDeclared () {
  
//   try {
//     mongoose.model('Students')  // it throws an error if the model is still not defined
//     return true
//   } catch (e) {
//     return false
//   }
// }
global.StudentSchema = global.StudentSchema || mongoose.model('Student', StudentSchema);
module.exports = global.StudentSchema

