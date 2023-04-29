import Jammin from "../pages/jammin";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import server from "../src/mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Matt", () => {
	// it should render something
	it("should render a thing", () => {
		render(<Jammin />);
		screen.debug();
	});
});
