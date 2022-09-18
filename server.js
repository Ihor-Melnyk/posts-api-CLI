const express = require("express");
const morgan = require("morgan");
const app = express();

const { postRouter } = require("./src/routers/postsRouter");

const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/posts", postRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server works at port ${PORT}!`);
});
