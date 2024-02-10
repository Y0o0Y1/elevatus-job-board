interface JobCardProps {
    jobTitle: string,
    jobLocation: {
        city: string,
        country: string
    },
    careerLevel: string[],
    jobUri: string,

}
export type { JobCardProps }