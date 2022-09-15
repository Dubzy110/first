const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public", {}));

let x = 0;

const items = {
  1: "item 1",
  2: "notItem"
};
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/item/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(items[id]);
});

app.get("/stuff", (req, res) => {
  x++;
  res.send(x.toString());
});

app.delete("/item/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  delete items[id];
  res.status(200).json({ text: `Successfully deleted item of id: ${id}!` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
