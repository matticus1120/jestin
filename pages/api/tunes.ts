const handler = async (req, res): Promise<void> => {
	const results = [
		{
			title: "adsfads",
			length: 23,
		},
		{
			title: "asdf23r23r23r",
			length: 23,
		},
	];

	res.status(200).json(results);
};
export default handler;
