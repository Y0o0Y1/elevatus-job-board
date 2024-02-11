import React from 'react';
import { Box, Button, Card, Skeleton, Stack, Typography } from '@mui/material';
import { SkeletonLoaderProps } from './SkeletonLoader.types';

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ size }) => {
    if (size === "large") {
        return <>
            <Card elevation={5} sx={{ overflowY: "hiddden", height: "auto" }}>
                <Stack gap={2} flexWrap={"wrap"}>
                    <Stack justifyContent={"space-between"} direction={"row"} gap={1} flexWrap={"wrap"}>
                        <Typography variant='h5'><Skeleton variant="text" width={200} /></Typography>
                        <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="circular" width={40} height={40} />
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} alignItems={"center"}>
                        <Stack direction={"row"} gap={1}>
                            <Typography variant='caption' color={"gray"} > <Skeleton variant="text" width={100} /></Typography>
                            <Typography variant='caption' color={"gray"} ><Skeleton variant="text" width={100} /></Typography>
                        </Stack>
                        <Skeleton variant="circular" width={100} height={40} />
                    </Stack>
                    <Stack>
                        <Typography variant='subtitle1'><Skeleton variant="text" width={200} /></Typography>
                        <Skeleton variant="rectangular" width={'100%'} height={100} />
                    </Stack>
                    <Stack>
                        <Typography variant='subtitle1'><Skeleton variant="text" width={200} /></Typography>
                        <Skeleton variant="rectangular" width={'100%'} height={100} />
                    </Stack>
                </Stack>
                <Stack alignItems={"flex-end"}>
                    <Box>
                        <Button variant='contained'><Skeleton variant="text" width={100} /></Button>
                    </Box>
                </Stack>
            </Card>
        </>
    }
    if (size === "medium")
        return (
            <div>
                <Skeleton animation="wave" variant="rectangular" width="100%" height={200} />
                <Skeleton animation="wave" variant="text" width="70%" />
                <Skeleton animation="wave" variant="text" width="50%" />
                <Skeleton animation="wave" variant="text" width="80%" />
            </div>
        );
}

export default SkeletonLoader;
