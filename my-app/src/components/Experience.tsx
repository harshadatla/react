import { Box, Heading, Stack, HStack, Image, Text, Center } from "native-base";
import { experience } from "../data/profileData";

const Experience = () => {
	const experienceArray = experience[0];
	let options: any = {
		year: "numeric",
		month: "short"
	};
	return (
		<Box bg="primary.400" p="5" my="5" rounded={"lg"}>
			<Heading size={"lg"} fontSize={25}>
				Experience
			</Heading>
			{experience.map((elem, index) => (
				<Box key={index}>
					<Stack direction="row" space="0" py={3}>
						<Image
							source={{
								uri: elem.companyLogo
							}}
							alt="Alternate Text"
							size="lg"
							rounded={"lg"}
						/>

						<Box bg="black" p="3" rounded={"lg"} minW={250}>
							<Heading size="xs">{elem.companyName}</Heading>
							<HStack space="0" alignItems="center">
								<Text fontSize="xs">
									{elem.jobPosition} ({elem.jobType})
								</Text>
							</HStack>

							<HStack space="1" alignItems="center">
								<Text fontSize="xs">
									{new Intl.DateTimeFormat(
										"en-US",
										options
									).format(elem.startDate)}{" "}
									-{" "}
									{new Intl.DateTimeFormat(
										"en-US",
										options
									).format(elem.endDate)}
								</Text>
							</HStack>
						</Box>
					</Stack>
				</Box>
			))}
		</Box>
	);
};

export default Experience;
