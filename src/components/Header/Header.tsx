import { Button, IconButton, Stack, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import Logo from "../../assets/y2ZqILiIdB5rmdH5XuG6ujLRHRJbweiyMbSrsYjN.png";
import { useNavigate } from 'react-router-dom';


const ResponsiveAppBar: React.FC = () => {
    const navigate = useNavigate()
    const { i18n } = useTranslation()
    const matches = useMediaQuery('(min-width:600px)');
    const handleLanguageChange = () => {
        i18n.changeLanguage(i18n.language == "en" ? "ar" : "en")
    }
    const handleNavigate = () => {
        navigate("/")
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack justifyContent={"space-between"} direction={"row"} alignItems={"center"} sx={{ width: "100%" }}>
                        <IconButton onClick={handleNavigate}>
                            <img src={Logo} width={matches ? 250 : 150} height={matches ? 40 : 30} />
                        </IconButton>
                        <Button variant='outlined' color='info' onClick={handleLanguageChange} sx={{ backgroundColor: "white", color: "black" }} >
                            {i18n.language == "en" ? "EN" : "AR "}
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;