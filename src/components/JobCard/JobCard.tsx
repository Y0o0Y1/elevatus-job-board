import { Button, Card, Chip, Grid, Stack, Typography } from '@mui/material';
import React, { startTransition } from 'react';
import { JobCardProps } from './JobCard.types';
import { useNavigate } from 'react-router-dom';

const JobCard: React.FC<JobCardProps> = ({ jobTitle, jobLocation, careerLevel, jobUri }) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        startTransition(() => {
            navigate(jobUri)
        })
    }

    return (
        <Button onClick={handleNavigate} >
            <Card variant={"elevation"} elevation={3} >
                <Grid container gap={2} justifyContent={"flex-start"}>
                    <Grid xs={12}>
                        <Typography variant='h5' >{jobTitle}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack alignItems={"flex-end"}>
                            <Chip label={jobLocation.country} color='primary' />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} >
                        <Stack justifyContent={"flex-end"} gap={2} direction={"row"}>
                            {careerLevel.slice(0, 3).map((level) => {
                                return <Chip label={level} color='success' />
                            })}
                        </Stack>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
            </Card>
        </Button>

    )
}

export default JobCard