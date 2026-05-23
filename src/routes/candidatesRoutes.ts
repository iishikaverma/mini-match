import express from "express";
import { candidates} from "../data/candidatesData";
import {Candidate} from "../types";

const router = express.Router();

router.post("/", (req, res) => {
    const newCandidate: Candidate = {
        id: String(candidates.length + 1),
        name: req.body.name,
        skills: req.body.skills,
        experience: req.body.experience,
        location: req.body.location
    };

    candidates.push(newCandidate);

    res.status(201).json({
        message: "Candidate added successfully",
        candidate: newCandidate
    });
});

export default router;