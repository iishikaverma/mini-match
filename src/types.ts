export interface Candidate {
    id: string;
    name: string;
    skills: string[];
    experience:number;
    location: string;
}

export interface Job {
    id: string;
    title:string;
    requiredSkills:string[];
    minYearsExperience: number;
    location: string;
}