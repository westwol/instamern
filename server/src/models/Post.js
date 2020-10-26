const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    poster: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imageUrl: { 
        type: String,
        required: true,
        trim: true
    },
    caption: {
        type: String,
        required: true,
        trim: true
    },
    comments: [
        { 
            author: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true 
            },
            content: { 
                type: String,
                required: true,
                trim: true,
            },
            created_at: {
                type: Date,
                default: Date.now
            }
        }
    ],
    likes: {
        type: Array,
        default: []
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

module.exports = mongoose.model('Post', PostSchema);