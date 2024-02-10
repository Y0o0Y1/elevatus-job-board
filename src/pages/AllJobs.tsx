import { Grid, Pagination, Stack, TextField, Typography } from '@mui/material'
import { useDebounce } from '@uidotdev/usehooks'
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import JobCard from '../components/JobCard/JobCard'
import { jobs } from '../constants/constants'
import { useFetchAllJobsQuery } from '../redux/services/jobs'


const AllJobs: React.FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('');
    const debouncedSearchTerm = useDebounce(keyword, 500);
    const [paginationParams, setPaginationParams] = useState({ limit: 5, page: 0 })
    // const { data: jobsData, isLoading: jobsLoading, refetch } = useFetchAllJobsQuery({ ...paginationParams, itemQuery: debouncedSearchTerm })
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPaginationParams({ ...paginationParams, page: value - 1 });
    }

    useEffect(() => {
        if (jobs) {
            const totalJobs = jobs.length;
            const totalPagesCount = Math.ceil(totalJobs / paginationParams.limit);
            setTotalPages(totalPagesCount);
        }
    }, [jobs, paginationParams.limit]);

    return jobs && (
        <>
            <Grid container rowGap={2} columnSpacing={4}>
                <Grid item xs={12}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant='h2'>{t("currentOpenings")}</Typography>
                        <TextField label={"Search"} onChange={handleSearch} value={keyword} />
                    </Stack>
                </Grid>
                {jobs && jobs.map((job) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <JobCard jobUri={job.uri} jobTitle={job.title} jobLocation={job.location} careerLevel={job.career_level} />
                        </Grid>
                    )
                })}
                <Grid item xs={12}>
                    <Pagination count={totalPages} onChange={handlePagination} />
                </Grid>
            </Grid>
        </>
    )
}

export default AllJobs

