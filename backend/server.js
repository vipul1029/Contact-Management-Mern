

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

/* ---------- Middlewares ---------- */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

/* ---------- Routes ---------- */
app.get("/", (req, res) => {
  res.send("Contact Management API is running");
});

app.use("/api/contacts", contactRoutes);

/* ---------- MongoDB ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

/* ---------- LOCAL SERVER ONLY ---------- */
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

/* ---------- EXPORT FOR VERCEL ---------- */
export default app;
