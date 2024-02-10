import { Stack } from "@mui/system";
import Lottie from "lottie-react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Error404 from "../assets/404.json";
import Error500 from "../assets/500-error.json";

const ErrorPage = () => {
	const render500Page = () => {
		return (
			<Stack
				justifyContent={"center"}
				alignItems={"center"}
				sx={{ height: "100%" }}
				spacing={2}
			>
				<Typography sx={headerStyles}>
					Error 500 Internal Server Error
				</Typography>
				<Lottie
					loop={true}
					autoPlay={true}
					animationData={Error500}
					//width={"auto"}
					style={{ width: "auto", height: "284px" }}
				/>
				<Typography
					color={"secondary.contrastText"}
					sx={{ maxWidth: "20%" }}
					align={"center"}
				>
					{" "}
					Ratione sequi quod aut quidem magni consectetur similique.
					accusamus-animi-dolorem sequi-dolorem-ut
				</Typography>
				<Link to={"/"}>
					<Button variant={"contained"}>Back To Home</Button>
				</Link>
			</Stack>
		);
	};
	const headerStyles = {
		font: "normal normal 800 30px/46px Poppins",
	};
	const render404Page = () => {
		return (
			<Stack
				justifyContent={"center"}
				alignItems={"center"}
				sx={{ height: "100%" }}
				spacing={2}
			>
				<Typography sx={headerStyles}>Page not found</Typography>
				<Lottie
					loop={true}
					autoPlay={true}
					animationData={Error404}
					//width={"auto"}
					style={{ width: "auto", height: "284px" }}
				/>
				<Typography
					color={"secondary.contrastText"}
					align={"center"}
					sx={{ maxWidth: "20%" }}
				>
					{" "}
					Ratione sequi quod aut quidem magni consectetur similique.
					accusamus-animi-dolorem sequi-dolorem-ut
				</Typography>
				<Link to={"/"}>
					<Button variant={"contained"}>Back To Home</Button>
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
