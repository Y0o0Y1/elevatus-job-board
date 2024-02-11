import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Empty from "../../assets/empty-state.json"
import { useTranslation } from "react-i18next";


const headerStyles = {
    font: "normal normal 800 30px/46px Poppins",
};

const EmptyState = () => {
    const { t } = useTranslation()
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100%" }}
            spacing={2}
        >
            <Typography sx={headerStyles}>{t("emptyStateTitle")}</Typography>
            <Lottie
                loop={true}
                autoPlay={true}
                animationData={Empty}
                style={{ width: "auto", height: "284px" }}
            />
        </Stack>
    );
};

export default EmptyState