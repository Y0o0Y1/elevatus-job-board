import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Pagination, Stack, TextField, Typography } from '@mui/material';
import { useDebounce } from '@uidotdev/usehooks';
import JobCard from '../components/JobCard/JobCard';
import PerPageSelector from '../components/PerPageSelector';
import { jobs } from '../constants/constants';

const AllJobs: React.FC = () => {
    const { t } = useTranslation()
    const [keyword, setKeyword] = useState('');
    const debouncedSearchTerm = useDebounce(keyword, 500);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    const handlePerPageChange = (perPage: number) => {
        setItemsPerPage(perPage);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if (event)
            setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = jobs.slice(startIndex, endIndex);


    return jobs && (
        <>
            <Grid container rowGap={2} columnSpacing={4}>
                <Grid item xs={12}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant='h2'>{t("currentOpenings")}</Typography>
                        <TextField label={"Search"} onChange={handleSearch} value={debouncedSearchTerm} />
                    </Stack>
                </Grid>
                {jobs && paginatedData.map((job) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <JobCard job={job} />
                        </Grid>
                    )
                })}
                <Grid item xs={12}>
                    <Stack direction={"row"} gap={2} alignItems={"center"}>
                        <Pagination
                            count={Math.ceil(jobs.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                        <PerPageSelector itemsPerPage={itemsPerPage} onChange={handlePerPageChange} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default AllJobs

