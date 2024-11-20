const express = require("express");
const app = express();
const port = 3001;
const postsRouter = require("./routers/posts");

app.use(express.static("public"));
app.use("/bacheca", postsRouter);

app.get("/", (req, res) => {
  res.send("Server del mio Blog");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
