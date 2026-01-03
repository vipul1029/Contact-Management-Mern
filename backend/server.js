// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const contactRoutes = require("./routes/contactRoutes");

// const app = express();

// /* ---------- Middleware ---------- */
// app.use(cors());
// app.use(express.json());

// /* ---------- Routes ---------- */
// app.use("/api/contacts", contactRoutes);

// /* ---------- Health Check ---------- */
// app.get("/", (req, res) => {
//   res.send("Contact Management API is running");
// });

// /* ---------- Database Connection ---------- */
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// /* ---------- Server ---------- */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });







const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/contacts", contactRoutes);

/* Health check */
app.get("/", (req, res) => {
  res.send("Contact Management API is running");
});

/* MongoDB connection caching */
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

/* IMPORTANT: Export app (NO app.listen) */
module.exports = app;
