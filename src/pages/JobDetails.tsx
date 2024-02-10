import { Grid } from '@mui/material'
import React from 'react'
import JobDetailsCard from '../components/JobDetailsCard/JobDetailsCard'

const JobDetails: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={8}>
                <JobDetailsCard />
            </Grid>
        </Grid>
    )
}

export default JobDetails