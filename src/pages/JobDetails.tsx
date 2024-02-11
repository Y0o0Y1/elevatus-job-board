import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import JobDetailsCard from '../components/JobDetailsCard/JobDetailsCard'
import JobsSider from '../components/JobsSider'
import SkeletonLoader from '../components/SkeletonLoader'
import { useFetchOneJobQuery } from '../redux/services/jobs'

const JobDetails: React.FC = () => {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const matches = useMediaQuery('(max-width:900px)');
    const { id } = useParams()
    const { data: jobData, isFetching: jobLoading, error } = useFetchOneJobQuery({ uri: id ? id : "", lang: i18n.language })
    //@ts-ignore
    if (error?.status === 404) {
        navigate('/404');
        return null;
    }
    return (
        <Grid container columnSpacing={5} rowSpacing={3} direction={matches ? "column-reverse" : "row"}>
            <Grid item xs={12} md={4}>
                <JobsSider />
            </Grid>
            <Grid item xs={12} md={8}>
                {jobLoading ? <SkeletonLoader size={"large"} /> :
                    <>
                        {jobData && <JobDetailsCard job={jobData.results} />}
                    </>
                }
            </Grid>
        </Grid>
    )
}

export default JobDetails