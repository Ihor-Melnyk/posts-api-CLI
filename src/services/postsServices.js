const { Post } = require("../db/postModel");
const { WrongParametersError } = require("../helpers/errors");

const getPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const getPostsById = async (id) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) {
    throw new WrongParametersError(`failure, no post with id ${id} found`);
  }
  return post;
};

const addPost = async ({ topic, text }) => {
  const post = new Post({ topic, text });
  await post.save();
};

const changePostById = async (id, { topic, text }) => {
  await Post.findByIdAndUpdate(id, { $set: { topic, text } });
};

const deletePostsById = async (id) => {
  await Post.findByIdAndRemove(id);
};

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostsById,
};
