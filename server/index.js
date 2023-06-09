import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import postRoutes from "./routes/postRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/ai", aiRoutes);

app.get("/", async (req, res) => {
  res.send("Welcome to ImageAI by Nav");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>
      console.log(`Server live: http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
};

startServer();
