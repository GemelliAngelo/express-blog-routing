const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      title: "Ciambellone",
      content: "Contenuto1",
      image: "/ciambellone.jpeg",
      tags: [""],
    },
    {
      title: "Cracker alla barbabietola ",
      content: "Contenuto2",
      image: "/cracker_barbabietola.jpeg",
      tags: [""],
    },
    {
      title: "Pane fritto dolce",
      content: "Contenuto3",
      image: "/pane_fritto_dolce.jpeg",
      tags: [""],
    },
    {
      title: "Pasta alla barbabietola",
      content: "Contenuto4",
      image: "/pasta_barbabietola.jpeg",
      tags: [""],
    },
    {
      title: "Torta paesana",
      content: "Contenuto5",
      image: "/torta_paesana.jpeg",
      tags: [""],
    },
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
