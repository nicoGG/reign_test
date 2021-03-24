import { Document } from 'mongoose';

export interface Hit extends Document {
    story_id: number;
    objectID: number;
    story_title: String;
    story_text: String;
    story_url: String;
    title: string;
    parent_id: number;
    url: String;
    author: String;
    points: String;
    comment_text: String;
    num_comments: number;
    created_at: Date;
    created_at_i: Date;
}