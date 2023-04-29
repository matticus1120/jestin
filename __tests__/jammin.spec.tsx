import Jammin from "../pages/jammin";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "whatwg-fetch";

import "@testing-library/jest-dom";
import { mswServer } from "../src/mocks/server";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

describe("Matt", () => {
	it("should render <Jammin /> without failing", async () => {
		render(<Jammin />);
		await screen.findByText("All the Tunes");
		expect(screen.getByText("Eyes to the wind: 1")).toBeInTheDocument();
		screen.debug();
	});
});
