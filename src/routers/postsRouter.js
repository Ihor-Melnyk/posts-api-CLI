const express = require("express");
const router = express.Router();
const {
  addPostValidation,
  patchPostValidation,
} = require("../middlewares/validationMiddleware");
const { asyncWrapper } = require("../helpers/apiHelpers");

const {
  getPostsController,
  getByIdController,
  addPostController,
  changePostController,
  deletePostController,
} = require("../controllers/postsController");

router.get("/", asyncWrapper(getPostsController));
router.get("/:id", asyncWrapper(getByIdController));
router.post("/", addPostController, asyncWrapper(addPostValidation));
router.put("/:id", changePostController, asyncWrapper(addPostValidation));
router.delete("/:id", asyncWrapper(deletePostController));

module.exports = { postsRouter: router };
