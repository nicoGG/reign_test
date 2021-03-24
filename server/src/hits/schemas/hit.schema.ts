import * as mongoose from 'mongoose';

export const hitSchema = new mongoose.Schema({
    story_id: Number,
    objectID: Number,
    story_title: String,
    story_text: String,
    story_url: String,
    title: String,
    parent_id: Number,
    url: String,
    author: String,
    points: String,
    comment_text: String,
    num_comments: Number,
    created_at: String,
    created_at_i: String,
}, {
    versionKey: false
});