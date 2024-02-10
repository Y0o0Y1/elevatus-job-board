import { Button, Card, Chip, Grid, Stack, Typography } from '@mui/material';
import React, { startTransition } from 'react';
import { JobCardProps } from './JobCard.types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { setCurrentJob } from '../../redux/features/jobsSlice';

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const dispatch = useAppDispatch()
    const { uri, title, location, career_level } = job
    const navigate = useNavigate()
    const handleNavigate = () => {
        dispatch(setCurrentJob(job))
        startTransition(() => {
            navigate(uri)
        })
    }

    return (
        <Button onClick={handleNavigate} fullWidth >
            <Card variant={"elevation"} elevation={3} sx={{ width: "100%" }}>
                <Grid container gap={2} justifyContent={"flex-start"}>
                    <Grid xs={12}>
                        <Typography variant='h5' textAlign={"left"}>{title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack alignItems={"flex-end"}>
                            <Chip label={location.country} color='primary' />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} >
                        <Stack justifyContent={"flex-end"} gap={2} direction={"row"}>
                            {career_level.slice(0, 3).map((level) => {
                                return <Chip label={level} color='success' />
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </Button>

    )
}

export default JobCard