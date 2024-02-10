import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import JobDetailsCard from '../components/JobDetailsCard/JobDetailsCard'
import JobsSider from '../components/JobsSider'
import { jobs } from '../constants/constants'
import { useAppDispatch } from '../redux/store'
import { setCurrentJob } from '../redux/features/jobsSlice'

const JobDetails: React.FC = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        const currentJob = jobs.find((job) => job.uri === params.id)
        if (currentJob)
            dispatch(setCurrentJob(currentJob))
        else {
            navigate("/404")
        }
    }, [params])
    return (
        <Grid container columnSpacing={5}>
            <Grid item xs={4}>
                <JobsSider />
            </Grid>
            <Grid item xs={8}>
                <JobDetailsCard />
            </Grid>
        </Grid>
    )
}

export default JobDetails