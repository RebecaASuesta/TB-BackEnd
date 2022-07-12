const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Por favor, introduce tu nombre"]
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Este correo no es válido"],
        unique:true,
        required: [true, "Por favor, introduce tu correo electrónico"]
    },
    password: {
        type: String,
        required: [true, "Por favor, introduce tu contraseña"],
    },
    image: String,
    role: String,
    confirmed: Boolean,
    tokens: [],
    postIds: [{
        type: ObjectId,
        ref: 'Post'
    }],
    commentIds: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    likeIds: [{
        type: ObjectId,
        ref: 'Post'
    }],
    dislikeIds: [{
        type: ObjectId,
        ref: 'Post'
    }]
}, { timestamps: true });

UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.password;
    delete user.tokens;
    return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;