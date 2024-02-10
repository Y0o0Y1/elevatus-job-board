import { Grid } from '@mui/material'
import React, { useState } from 'react'
import JobDetailsCard from '../components/JobDetailsCard/JobDetailsCard'
import { jobs } from '../constants/constants'

const JobDetails: React.FC = () => {
    const [currentJob] = useState(jobs[1])

    return (
        <Grid container>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={8}>
                <JobDetailsCard
                    job={currentJob}
                />
            </Grid>
        </Grid>
    )
}

export default JobDetails