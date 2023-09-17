import express from "express";
import cors from "cors";
const app = express();

app.use(cors(), express.json());
app.post("/api/v1/update", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, [2000]);
});

app.listen(8000, () => {
  console.log("server listening on localhost:8000");
});
