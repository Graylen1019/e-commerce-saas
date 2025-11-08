import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

const port = process.env.PORT || 8081;
const server = app.listen(port, () => {
    console.log(`Auth Service is running at http://localhost:${port}/api`)
})

server.on("error", (err) => {
  console.error("Server error:", err);
});