import { Stack, Image, Text, Box, Link, Heading } from "native-base";
import {
	email,
	firstName,
	lastName,
	linkedInUrl,
	phone
} from "../data/profileData";

const Biodata = () => {
	return (
		<Stack direction="row" space="0">
			<Image
				source={{
					uri: "https://media-exp1.licdn.com/dms/image/C4D03AQHCHjCj8HfH4Q/profile-displayphoto-shrink_400_400/0/1546611232579?e=1674691200&v=beta&t=ycLnRN2M32RQHl7o2NQewXgiAJSis_SLMc3Q03zqQxo"
				}}
				alt="Alternate Text"
				size="xl"
				rounded={"lg"}
			/>

			<Box bg="black" size="xl" h="128" w="auto" p="3" rounded={"lg"}>
				<Heading size={"lg"} fontSize={25}>
					{firstName} {lastName}
				</Heading>
				<Text fontSize="xs" p={0.5}>
					Email: {email}
				</Text>
				<Text fontSize="xs" p={0.5}>
					Phone: {phone}
				</Text>
				<Text fontSize="xs" p={0.5}>
					LinkedIn Profile:{" "}
					<Link href={linkedInUrl}>{linkedInUrl}</Link>
				</Text>
			</Box>
		</Stack>
	);
};

export default Biodata;
