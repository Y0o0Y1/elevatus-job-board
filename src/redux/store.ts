import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import { jobsApi } from './services/jobs';
import jobsSlice from './features/jobsSlice';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs'],
    version: 1,
}
const rootReducer = combineReducers({
    jobs: jobsSlice,
    [jobsApi.reducerPath]: jobsApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([jobsApi.middleware]),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;