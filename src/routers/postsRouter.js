const express = require("express");
const router = express.Router();
const {
  addPostValidation,
  patchPostValidation,
} = require("../middlewares/validationMiddleware");
const {
  getPosts,
  getById,
  addPost,
  changePost,
  patchPost,
  deletePost,
} = require("../controllers/postsController");

router.get("/", getPosts);
router.get("/:id", getById);
router.post("/", addPost, addPostValidation);
router.put("/:id", changePost, addPostValidation);
router.patch("/:id", patchPost, patchPostValidation);
router.delete("/:id", deletePost);

module.exports = { postRouter: router };
