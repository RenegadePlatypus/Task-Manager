const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Else will not work'],
        trim: true,
        maxlength: [20, 'for sake of simplicity']
    },
    completed: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Task', taskSchema)