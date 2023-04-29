import { rest } from "msw";

function getPosts() {
	return rest.get(`/api/tunes`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					length: 1,
					id: 1,
					title: "Post 1 title",
					body: "Post 1 body",
				},
				{
					length: 1,
					id: 2,
					title: "Post 2 title",
					body: "Post 2 body",
				},
			])
		);
	});
}

export const handlers = [getPosts()];
