import express from "express";

import { jobs } from "../data/jobsData";
import { candidates } from "../data/candidatesData";
import calculateMatchScore from "../utils/scoring";

const router = express.Router();

router.post("/", (req, res) => {
    const { jobId, minScore } = req.body;
    const job = jobs.find(
        (job) => job.id === jobId
    );

    if (!job) {
        return res.status(404).json({
            error: "Job not found"
        });
    }

    const matches = candidates.map((candidate) => {
        const scoreData = calculateMatchScore(candidate, job);
        return {
        candidate,
        totalScore: scoreData.totalScore,
        breakdown: scoreData.breakdown
        };
    })

    .sort(
        (a, b) => b.totalScore - a.totalScore
    );

    const filteredMatches =
        minScore !== undefined
            ? matches.filter( (match) => match.totalScore >= minScore ): matches;

    res.json(filteredMatches);
});

export default router;