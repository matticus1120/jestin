import results from "../../../src/data/tunes";

const handler = async (req, res): Promise<void> => {
	const tune = results[req.query?.id];
	res.status(200).json(tune);
};

export default handler;
