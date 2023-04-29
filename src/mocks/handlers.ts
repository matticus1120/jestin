// mocks/handlers.js

import { rest } from "msw";
import users from "data/users"; // contains mock data for users
import messages from "data/messages"; // contains mock data for messages

export const handlers = [
	rest.get(`/api/tunes`, async (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					length: 1,
					title: "Eyes to the wind",
				},
				{
					length: 1,
					title: "Take it easy.",
				},
			])
		);
	}),
];
