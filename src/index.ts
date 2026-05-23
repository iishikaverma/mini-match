import express from "express";
import cors from "cors";

const app = express();

import jobsRoutes from "./routes/jobsRoutes";
import candidatesRoutes from "./routes/candidatesRoutes";

app.use(cors());
app.use(express.json());

app.use("/jobs", jobsRoutes);
app.use("/candidates", candidatesRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(3000, () => {
    console.log("Server is sucessfully listening on port 3000")
});