import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AllJobsApiResponse, FetchAllJobsParams, FetchOneJobParams, OneJobApiResponse } from '../../types/jobs';

export const JOBS_API = 'jobsApi';
export const jobsApi = createApi({
    reducerPath: JOBS_API,
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        credentials: "same-origin",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set('accept-company', import.meta.env.VITE_ACCEPT_COMPANY);
            headers.set('accept-account', import.meta.env.VITE_ACCEPT_ACCOUNT);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        //todo collect params in one type
        fetchAllJobs: builder.query<AllJobsApiResponse, FetchAllJobsParams>({
            query: (params) => ({
                url: "/jobs",
                method: "GET",
                params,
                headers: {
                    "accept-language": params.lang
                }
            }),
        }),
        fetchOneJob: builder.query<OneJobApiResponse, FetchOneJobParams>({
            query: (params) => ({
                url: "/jobs/uri",
                method: "GET",
                params,
                headers: {
                    "accept-language": params.lang
                }
            })
        }),
    }),
});

export const { useFetchAllJobsQuery, useFetchOneJobQuery } = jobsApi;
