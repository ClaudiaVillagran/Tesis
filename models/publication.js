const {Schema, model} = require('mongoose');

const publicationSchema = Schema({
    student:{
        type: Schema.ObjectId,
        ref: 'Student'
    },
    text:{
        type: String,
        required: true
    },
    file: String,
    categories: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Publication', publicationSchema);