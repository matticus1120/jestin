import { rest } from "msw";

const tunes = [
	{
		length: 5.11,
		title: "Eyes to the wind",
		id: "tu_akd923832fi2f3f",
	},
	{
		length: 2.32,
		title: "Take it easy.",
		id: "tu_asdfk23f0ij23f3",
	},
	{
		length: 1.12,
		title: "The Weight",
		id: "tu_l23lkr32o0vgje",
	},
	{
		length: 32.32,
		title: "Stairway to heaven",
		id: "tu_23oin230fb32irji3",
	},
];

export const handlers = [
	rest.get(`/api/tunes`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(tunes));
	}),
	rest.get(`/api/tunes/0`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(tunes[0]));
	}),
	rest.get(`/api/tunes/1`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(ctx.json(tunes[1])));
	}),
];
