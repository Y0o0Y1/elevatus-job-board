import { Grid, Pagination, Stack, TextField, Typography } from '@mui/material';
import { useDebounce } from '@uidotdev/usehooks';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyState from '../components/EmptyState';
import JobCard from '../components/JobCard/JobCard';
import PerPageSelector from '../components/PerPageSelector';
import SkeletonLoader from '../components/SkeletonLoader';
import { useFetchAllJobsQuery } from '../redux/services/jobs';

const AllJobs: React.FC = () => {
    const { t, i18n } = useTranslation()
    const [keyword, setKeyword] = useState('');
    const debouncedSearchTerm = useDebounce(keyword, 500);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        itemsPerPage: 5
    })
    const { data: jobsData, isFetching: jobsLoading, refetch: refetchJobs, } = useFetchAllJobsQuery({
        limit: pagination.itemsPerPage, page: pagination.currentPage - 1,
        itemQuery: debouncedSearchTerm, lang: i18n.language
    })
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setPagination((prev) => ({ ...prev, currentPage: 1 }));
        setKeyword(e.target.value)
    }

    const handlePerPageChange = (perPage: number) => {
        setPagination({ currentPage: 1, itemsPerPage: perPage });
        refetchJobs()
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if (event) {
            setPagination((prev) => ({ ...prev, currentPage: page }));
        }
    };

    // Generate loaders based on items per page
    const renderLoaders = useCallback((itemsPerPage: number) => {
        const loaders = [];
        for (let i = 0; i < itemsPerPage; i++) {
            loaders.push(
                <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <SkeletonLoader size={"medium"} />
                </Grid>
            );
        }
        return loaders
    }, [pagination.itemsPerPage])

    return (
        <>
            <Grid container rowGap={2} columnSpacing={4}>
                <Grid item xs={12}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
                        <Typography variant='h2'>{t("currentOpenings")}</Typography>
                        <Grid item xs={12} sm={8} md={4}>
                            <TextField variant={"outlined"} label={t("search")} onChange={handleSearch} value={keyword} fullWidth />
                        </Grid>
                    </Stack>
                </Grid>
                {jobsLoading ? <>
                    {...renderLoaders(pagination.itemsPerPage)}
                </> :
                    jobsData?.results?.jobs && jobsData?.results?.jobs?.length > 0 ?
                        <>
                            {jobsData?.results.jobs.map((job) => {
                                return (
                                    <Grid key={job.uuid} item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <JobCard job={job} />
                                    </Grid>
                                )
                            })}
                            <Grid item xs={12}>
                                <Stack direction={"row"} gap={2} alignItems={"center"}>
                                    <Pagination
                                        count={Math.ceil(jobsData?.results.total / pagination.itemsPerPage)}
                                        page={pagination.currentPage}
                                        onChange={handlePageChange}
                                    />
                                    <PerPageSelector itemsPerPage={pagination.itemsPerPage} onChange={handlePerPageChange} />
                                </Stack>
                            </Grid>
                        </> :
                        <Grid item xs={12}>
                            <EmptyState />
                        </Grid>
                }
            </Grid>
        </>
    )
}

export default AllJobs

