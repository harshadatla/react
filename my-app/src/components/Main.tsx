import { Box } from "native-base";
import Biodata from "./Biodata";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Main = () => {
	return (
		<Box bg="brown" p="3" rounded="lg">
			<Biodata />
			<Experience />
			<Education />
			<Skills />
		</Box>
	);
};

export default Main;
