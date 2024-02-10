interface ApiResponse {
    statusCode: number;
    message: string;
    results: Results;
    dateTime: DateTime;
}

interface Results {
    jobs: Job[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

interface Job {
    uuid: string;
    title: string;
    company_uuid: string;
    url: string;
    is_top: boolean;
    gpa: number;
    years_of_experience: number[];
    geolocation: Geolocation;
    willing_to_travel: boolean;
    willing_to_relocate: boolean;
    owns_a_car: boolean;
    visa_sponsorship: boolean;
    salary: Salary;
    gender: string;
    description: string;
    requirements: string;
    skills: string[];
    uri: string;
    posted_at: string;
    score: number;
    is_applied: boolean;
    applied_at: string | null;
    outside: boolean;
    has_profile: boolean;
    outside_key: string | null;
    job_type: string[];
    degree: string[];
    industry: string[];
    major: string[];
    nationality: string[];
    career_level: string[];
    languages: Language[];
    location: Location;
    category: string[];
}

interface Geolocation {
    latitude: number;
    longitude: number;
}

interface Salary {
    min: number;
    max: number;
}

interface Language {
    [key: string]: number;
}

interface Location {
    city: string;
    country: string;
}

interface DateTime {
    date: string;
    timezone_type: number;
    timezone: string;
}

export type { ApiResponse, Job }
