const {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostsById,
} = require("../services/postsServices");

const getPostsController = async (req, res) => {
  const posts = await getPosts();

  res.json({ posts });
};

const getByIdController = async (req, res) => {
  const { id } = req.params;

  const post = await getPostsById(id);

  res.json({ post, status: "success" });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;

  await addPost({ topic, text });

  res.json({ status: "success" });
};

const changePostController = async (req, res) => {
  const { id } = req.params;

  await changePostById(id, { $set: { topic, text } });

  res.json({ status: "success" });
};

const deletePostController = async (req, res) => {
  const { id } = req.params;

  await deletePostsById(id);

  res.json({ status: "success" });
};

module.exports = {
  getPostsController,
  getByIdController,
  addPostController,
  changePostController,
  deletePostController,
};
