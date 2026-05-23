import {Candidate, Job} from "../types";

function calculateMatchScore(candidate: Candidate, job: Job) {
    let skillScore = 0;

    if (job.requiredSkills.length === 0) {
        skillScore = 1;
    } 
    else {
        const matchedSkills = candidate.skills.filter((skill) =>
            job.requiredSkills.some(
                (requiredSkill) => requiredSkill.toLowerCase() === skill.toLowerCase()
            )
        );
        skillScore = matchedSkills.length/job.requiredSkills.length;
    }

    let experienceScore = 0;
    if (job.minYearsExperience === 0) {
        experienceScore = 1;
    } else {
        experienceScore = Math.min(
            candidate.experience/job.minYearsExperience,
            1
        );
    }

    let locationScore = 0;
    if (job.location === "Remote" || candidate.location === "Remote") {
        locationScore = 1;
    } else if (candidate.location === job.location) {
        locationScore = 1;
    } else {
        locationScore = 0;
    }

    const totalScore =
        skillScore * 0.6 +
        experienceScore * 0.3 +
        locationScore * 0.1;

    return {
        totalScore,
        "breakdown": {
            "skillScore": 1,
            "experienceScore": 0.8,
            "locationScore": 0.5
        }
    };
}

export default calculateMatchScore;