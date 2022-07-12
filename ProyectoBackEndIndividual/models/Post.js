const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Por favor, introduce el nombre del acta"]
    },
    body: {
        type: String,
        required: [true, "Por favor, introduce el cuerpo del acta"]
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    commentIds: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    likes: [{ type: ObjectId }],
    dislikes: [{ type: ObjectId }]
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;