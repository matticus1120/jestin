import results from "../../../src/data/tunes";

const handler = async (req, res): Promise<void> => {
	res.status(200).json(results);
};
export default handler;
