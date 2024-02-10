import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../../types/jobs";

const initialState: Job = {
    uuid: "",
    title: "",
    company_uuid: "",
    url: "",
    is_top: false,
    gpa: 0,
    years_of_experience: [],
    geolocation: {
        latitude: 0,
        longitude: 0
    },
    willing_to_travel: false,
    willing_to_relocate: false,
    owns_a_car: false,
    visa_sponsorship: false,
    salary: {
        max: 0,
        min: 0
    },
    gender: "",
    description: "",
    requirements: "",
    skills: [],
    uri: "",
    posted_at: new Date().toDateString(),
    score: 0,
    is_applied: false,
    applied_at: null,
    outside: false,
    has_profile: false,
    outside_key: null,
    job_type: [],
    degree: [],
    industry: [],
    major: [],
    nationality: [],
    career_level: [],
    languages: [],
    location: {
        country: "",
        city: "",
    },
    category: []
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setCurrentJob: (state, action: PayloadAction<Job>) => {
            return { ...state, ...action.payload }
        },
    }
});

export const { setCurrentJob } = jobsSlice.actions;
export default jobsSlice.reducer;
