const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: () => {
            return new Date()
        }
    }
})

module.exports = mongoose.model('Post', postSchema);