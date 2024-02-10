import { Box, Button, Card, Chip, Grid, Stack, Typography } from '@mui/material'
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { JobDetailsCardProps } from './JobDetailsCard.types';
import { LocationOn } from '@mui/icons-material';


const JobDetailsCard: React.FC<JobDetailsCardProps> = ({ job }) => {
    const { t } = useTranslation()
    const { posted_at, title, description, skills, requirements, location } = job

    const formatDate = useCallback((dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    }, []);
    
    const formattedDate = useMemo(() => formatDate(posted_at), [posted_at, formatDate]);

    return (
        <Card elevation={5}>
            <Stack gap={2} flexWrap={"wrap"}>
                <Stack justifyContent={"space-between"} direction={"row"} gap={1} flexWrap={"wrap"}>
                    <Typography variant='h5'>{title}</Typography>
                    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                        {skills.map((skill) => {
                            return <Chip key={skill} color='primary' label={skill.toLocaleUpperCase()} />
                        })}
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} alignItems={"center"}>
                    <Stack direction={"row"} gap={1}>
                        <Typography variant='caption' color={"gray"} > {t("datePosted")}:</Typography>
                        <Typography variant='caption' color={"gray"} >{formattedDate}</Typography>
                    </Stack>
                    <Chip color='success' icon={<LocationOn color='success' />} label={`${location.city}, ${location.country}`} />
                </Stack>
                <Stack>
                    <Typography variant='subtitle1'>{t("description")}</Typography>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </Stack>
                <Stack>
                    <Typography variant='subtitle1'>{t("requirements")}</Typography>
                    <div dangerouslySetInnerHTML={{ __html: requirements }} />
                </Stack>
            </Stack>
            <Stack alignItems={"flex-end"}>
                <Box>
                    <Button variant='contained'>{t("applyNow")}</Button>
                </Box>
            </Stack>
        </Card>
    )
}

export default JobDetailsCard