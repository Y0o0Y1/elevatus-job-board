import { Stack } from "@mui/system";
import Lottie from "lottie-react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Error404 from "../assets/404.json";
import Error500 from "../assets/500-error.json";
import { useTranslation } from "react-i18next";

const headerStyles = {
	font: "normal normal 800 30px/46px Poppins",
};

const ErrorPage = () => {
	const { t } = useTranslation()
	const render500Page = () => {
		return (
			<Stack
				justifyContent={"center"}
				alignItems={"center"}
				sx={{ height: "100%" }}
				spacing={2}
			>
				<Typography sx={headerStyles}>
					{t("500Error")}
				</Typography>
				<Lottie
					loop={true}
					autoPlay={true}
					animationData={Error500}
					//width={"auto"}
					style={{ width: "auto", height: "284px" }}
				/>
				<Link to={"/"}>
					<Button variant={"contained"}>{t("backToHome")}</Button>
				</Link>
			</Stack>
		);
	};
	const render404Page = () => {
		return (
			<Stack
				justifyContent={"center"}
				alignItems={"center"}
				sx={{ height: "100%" }}
				spacing={2}
			>
				<Typography sx={headerStyles}>
					{t("404Error")}
				</Typography>
				<Lottie
					loop={true}
					autoPlay={true}
					animationData={Error404}
					//width={"auto"}
					style={{ width: "auto", height: "284px" }}
				/>
				<Link to={"/"}>
					<Button variant={"contained"}>{t("backToHome")}</Button>
				</Link>
			</Stack>
		);
	};
	return (
		<Box sx={{ height: "100vh" }}>
			<>
				{location.pathname.split("/")[1] === "500"
					? render500Page()
					: render404Page()}
			</>
		</Box>
	);
};

export default ErrorPage;
