import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../../types/jobs';


export const JOBS_API = 'jobsApi';
export const jobsApi = createApi({
    reducerPath: JOBS_API,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://devapi-indexer.elevatustesting.xyz/api/v1",
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json');
            headers.set('Accept-Language', 'en');
            headers.set('Accept-Encoding', 'gzip, deflate, br');
            headers.set('Referer', 'https://careers.elevatustesting.xyz/jobs');
            headers.set('Accept-Company', 'd586e75b-19c5-4bd3-b37a-4935d19dfe9a');
            headers.set('Accept-Account', '328ef9bd-59bf-4828-8234-ab81134d39ea');
            headers.set('X-Frame-Options', 'SAMEORIGIN');
            headers.set('Origin', 'https://careers.elevatustesting.xyz');
            headers.set('Connection', 'keep-alive');
            headers.set('Sec-Fetch-Dest', 'empty');
            headers.set('Sec-Fetch-Mode', 'cors');
            headers.set('Sec-Fetch-Site', 'same-site');
            headers.set('TE', 'trailers');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        //todo collect params in one type
        fetchAllJobs: builder.query<ApiResponse, { limit: number, page: number, itemQuery: string }>({
            query: (params) => ({
                url: "/jobs",
                method: "GET",
                params,
            }),
        })
    }),
});

export const { useFetchAllJobsQuery } = jobsApi;
