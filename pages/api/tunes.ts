const handler = async (req, res): Promise<void> => {
	const results = [
		{
			title: "Eyes to the wind",
			length: 23,
		},
		{
			title: "Take it easy.",
			length: 23,
		},
		{
			title: "All Around the World",
			length: 4.3,
		},
		{
			title: "Brian Wilson",
			length: 4.3,
		},
	];

	res.status(200).json(results);
};
export default handler;
