import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      // Map is more efficient than using a Array for storing likes especially when it comes to a mass amount
      type: Map,
      of: Boolean,
    },
    comment: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
