import { Stack, Image, Text, Box, Link, Heading, Center } from "native-base";
import {
	email,
	firstName,
	lastName,
	linkedInUrl,
	profileImageUrl,
	phone
} from "../data/profileData";

const Biodata = () => {
	return (
		<Center bg="primary.400" p="5" rounded="lg">
			<Stack direction="row" space="0">
				<Image
					source={{
						uri: profileImageUrl
					}}
					alt="Alternate Text"
					size="xl"
					rounded={"lg"}
				/>

				<Box bg="black" p="3" rounded={"lg"}>
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
		</Center>
	);
};

export default Biodata;
