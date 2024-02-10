import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { LoaderProps } from './Loader.types'

const Loader: React.FC<LoaderProps> = ({ open, handleClose }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>)
}

export default Loader