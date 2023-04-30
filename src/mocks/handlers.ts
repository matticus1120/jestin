import { rest } from "msw";

const tunes = [
	{
		id: "tu_akd923832fi2f3f",
		length: 5.11,
		title: "Eyes to the wind",
	},
	{
		id: "tu_asdfk23f0ij23f3",
		length: 2.32,
		title: "Going to California",
	},
	{
		id: "tu_l23lkr32o0vgje",
		length: 1.12,
		title: "The Weight",
	},
	{
		id: "tu_23oin230fb32irji3",
		length: 32.32,
		title: "Stairway to heaven",
	},
];

const handlers = [
	rest.get(`/api/tunes/3`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(tunes[3]));
	}),
	rest.get(`/api/tunes`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(tunes));
	}),
	rest.get(`/api/tunes/0`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(tunes[0]));
	}),
];

export { tunes, handlers };
