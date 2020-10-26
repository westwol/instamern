const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { 
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select : false
    },
    status: {
        type: String,
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    created_at: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

UserSchema.index( { username: 'text' } );

module.exports = mongoose.model('User', UserSchema);