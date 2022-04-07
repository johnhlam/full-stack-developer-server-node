import mongoose from 'mongoose';
const schema = mongoose.Schema({
  topic: String,
  tuit: String,
  likes: Number,
  postedBy: {
    username: String
  },
  liked: Boolean,
  disliked: Boolean,
  verified: Boolean,
  handle: String,
  'logo-image': String,
  'avatar-image': String,
  attachments: {
    video: String,
    image: String,
  },
  stats: {
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number
  }

}, { collection: 'tuits' });
export default schema;