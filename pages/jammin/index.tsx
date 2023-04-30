import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
	Button,
	Box,
	Heading,
	Container,
	ChakraProvider,
	Text,
} from "@chakra-ui/react";

const useFetchTunes = () => {
	const [data, setData] = useState(null);

	const trigger = useCallback(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/tunes`);
			const responseData = await response.json();
			setData(responseData);
		};
		fetchData();
	}, []);

	return { data, trigger };
};

const useFetchTune = () => {
	const [data, setData] = useState(null);

	const trigger = useCallback((id) => {
		const fetchData = async () => {
			const response = await fetch(`/api/tunes/${id}`);
			const responseData = await response.json();
			setData(responseData);
		};

		fetchData();
	}, []);

	return { data, trigger };
};

function Matt() {
	const { data: tunes, trigger: triggerGetTunes } = useFetchTunes();
	const { data: tune, trigger: triggerGetTune } = useFetchTune();
	const router = useRouter();

	const handleTriggerGetTune = useCallback((index) => {
		triggerGetTune(index);
		router.push({ query: { "tune-id": index } });
	}, []);

	useEffect(() => {
		triggerGetTunes();
		if (router.isReady && router.query["tune-id"]) {
			console.log("get single", router.query["tune-id"]);
			handleTriggerGetTune(router.query["tune-id"]);
		}
	}, [triggerGetTunes, router.isReady, handleTriggerGetTune]);

	return (
		<Box>
			<Container maxW="90%">
				<Box
					sx={{
						display: "flex",
					}}
				>
					<Box
						sx={{
							width: "50%",
						}}
					>
						{tunes ? (
							<Box>
								<Heading>All the tunes are</Heading>

								{tunes.map((item, index) => (
									<Box
										key={item.title}
										sx={{
											display: "flex",
										}}
										mb={4}
									>
										<Text
											sx={{
												marginRight: 4,
											}}
										>{`${item.title}: ${item.length}`}</Text>
										<Button
											onClick={() => {
												handleTriggerGetTune(index);
											}}
										>
											Get Info
										</Button>
									</Box>
								))}
							</Box>
						) : (
							<></>
						)}
					</Box>
					<Box
						sx={{
							width: "50%",
						}}
					>
						<>
							{tune ? (
								<>
									<Heading>Song Details</Heading>
									<Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
											}}
										>
											<Text id="label-name">Name:</Text>
											<Text aria-labelledby="label-name">
												{tune.title}
											</Text>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
											}}
										>
											<Text id="label-length">
												Length:
											</Text>
											<Text aria-labelledby="label-length">
												{tune.length}
											</Text>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
											}}
										>
											<Text id="label-id">ID:</Text>
											<Text aria-labelledby="label-id">
												{tune.id}
											</Text>
										</Box>
									</Box>
								</>
							) : (
								<></>
							)}
						</>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default function Index() {
	return (
		<ChakraProvider>
			<Matt />
		</ChakraProvider>
	);
}
