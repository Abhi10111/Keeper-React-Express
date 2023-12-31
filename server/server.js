import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/new-note", (req, res) => {
  fs.writeFile("notes.txt", JSON.stringify(req.body), (err) => {});
  res.status(204).send();
});
app.get("/notes", (req, res) => {
  fs.readFile("notes.txt", "utf8", (err, data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
