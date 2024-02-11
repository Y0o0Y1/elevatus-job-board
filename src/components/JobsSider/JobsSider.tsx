import { Box, Grid, Pagination, Stack } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useFetchAllJobsQuery } from '../../redux/services/jobs';
import JobCard from '../JobCard';
import SkeletonLoader from '../SkeletonLoader';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const JobsSider: React.FC = () => {
    const { id } = useParams()
    const { i18n } = useTranslation()
    const [pagination, setPagination] = useState({
        currentPage: 1,
        itemsPerPage: 5
    })
    const { data: jobsData, isFetching: jobsLoading } = useFetchAllJobsQuery({ limit: pagination.itemsPerPage, page: pagination.currentPage - 1, itemQuery: "", lang: i18n.language })
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
                <Grid key={i} item xs={12}>
                    <SkeletonLoader size='medium' />
                </Grid>
            );
        }
        return loaders
    }, [pagination.itemsPerPage])

    return (
        <>
            {jobsLoading ? (
                // If jobs are still loading, render loaders
                renderLoaders(pagination.itemsPerPage)
            ) : (
                // Once jobs data is loaded, render the job cards and pagination
                jobsData?.results.jobs && (
                    <Stack gap={4} alignItems="flex-start" sx={{ overflowX: "hidden", height: "70%" }}>
                        <Box sx={{ overflowX: "hidden", height: "100%", width: "100%" }}>
                            {/* Map through each job and render JobCard */}
                            {jobsData.results.jobs.map((job) => (
                                <Grid item xs={12} key={job.uuid}>
                                    <JobCard job={job} selected={id == job.uri} />
                                </Grid>
                            ))}
                        </Box>
                        <Stack direction="row" gap={2} alignItems="center">
                            {/* Pagination */}
                            <Pagination
                                count={Math.ceil(jobsData.results.total / pagination.itemsPerPage)}
                                page={pagination.currentPage}
                                onChange={handlePageChange}
                            />
                        </Stack>
                    </Stack>
                )
            )}
        </>
    );

}

export default JobsSider