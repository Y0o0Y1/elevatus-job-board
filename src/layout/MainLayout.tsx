import { Box } from '@mui/material'
import ResponsiveAppBar from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledBox = styled(Box)`
    padding: 25px;
`

const MainLayout = () => {
    return (
        <>
            <ResponsiveAppBar />
            <StyledBox>
                {<Outlet />}
            </StyledBox>
        </>
    )
}

export default MainLayout