const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const { connectMongo } = require("./src/db/connection");
const { errorHandler } = require("./src/helpers/apiHelpers");

const { postsRouter } = require("./src/routers/postsRouter");

const PORT = process.env.PORT || 7777;

//services;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/posts", postsRouter);

app.use(errorHandler);

const start = async () => {
  try {
    await connectMongo();

    app.listen(PORT, (error) => {
      if (error) console.error("Error at server launch", error);
      console.log(`Server works at port ${PORT}!`);
    });
  } catch (error) {
    console.error(`Failed to launch application with error: ${error.message}`);
  }
};

start();
