import { Box, Grid, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import { jobs } from '../../constants/constants';
import JobCard from '../JobCard';

const JobsSider: React.FC = () => {
    const [itemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if (event)
            setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = jobs.slice(startIndex, endIndex);

    return (
        <>
            <Stack gap={4} alignItems={"flex-start"} sx={{ overflowX: "hidden", height: "80%" }}>
                <Box sx={{ overflowX: "hidden", height: "100%%", width: "100%" }}>
                    {jobs && paginatedData.map((job) => {
                        return (
                            <Grid item xs={12} key={job.uuid}>
                                <JobCard job={job} />
                            </Grid>
                        )
                    })}
                </Box>
                <Pagination
                    count={Math.ceil(jobs.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Stack>
        </>
    )
}

export default JobsSider