const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post : {
        type:String,
        required:true
    },
    likes : {
        type : Number,
        default :0
    },
    createdDate : {
        type : Date,
        default :Date.now()
    }
})

module.exports = mongoose.model('Post',postSchema);