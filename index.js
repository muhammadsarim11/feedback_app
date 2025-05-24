const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
let feedbacks = [];

app.post("/feedback", (req, res) => {
  const { name, message } = req.body;
  feedbacks.push({ name, message });
  res.status(201).json({ success: true });
});

app.get("/feedbacks", (req, res) => {
  res.json(feedbacks);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
