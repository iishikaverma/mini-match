import express from "express";
import cors from "cors";

const app = express();

import jobsRoutes from "./routes/jobsRoutes";
import candidatesRoutes from "./routes/candidatesRoutes";
import matchRoutes from "./routes/match";

app.use(cors());
app.use(express.json());

app.use("/jobs", jobsRoutes);
app.use("/candidates", candidatesRoutes);
app.use("/match", matchRoutes)

app.get("/", (req, res) => {
    res.send("Backend is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});