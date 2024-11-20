const express = require("express");
const router = express.Router();

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

// * INDEX

router.get("/posts", (req, res) => {
  res.json(posts);
});

// * SHOW

router.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Mostra post con indice ${id}`);
});

// * STORE

router.get("/posts", (req, res) => {
  res.send(`Aggiugni un post`);
});

module.exports = router;
