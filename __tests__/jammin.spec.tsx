import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { useRouter } from "next/router";
import Jammin from "../pages/jammin";
import "@testing-library/jest-dom";
import "whatwg-fetch";
import { mswServer } from "../src/mocks/server";

import { tunes } from "../src/mocks/handlers";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

// https://onebite.dev/mocking-next-router-on-jest-test/
jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
	push: () => jest.fn(),
});

describe("Matt", () => {
	it("should render a the list", async () => {
		render(<Jammin />);
		await screen.findByText("All the tunes are");
		expect(
			screen.getByText("Going to California: 2.32")
		).toBeInTheDocument();
	});

	it("should show details on click", async () => {
		render(<Jammin />);
		await screen.findByText("All the tunes are");
		expect(screen.getByText("Eyes to the wind: 5.11")).toBeInTheDocument();
		const buttons = screen.getAllByRole("button", {
			name: "Get Info",
		});
		fireEvent.click(buttons[0]);
		await screen.findByText("Song Details");

		expect(screen.getByLabelText("Name:")).toHaveTextContent(
			"Eyes to the wind"
		);
		expect(screen.getByLabelText("Length:")).toHaveTextContent("5.11");
		expect(screen.getByLabelText("ID:")).toHaveTextContent(
			"tu_akd923832fi2f3f"
		);
	});

	it("should show details on page load", async () => {
		useRouter.mockReturnValue({
			isReady: true,
			push: () => jest.fn(),
			query: {
				"tune-id": "3",
			},
		});

		render(<Jammin />);

		await screen.findByText("Song Details");
		expect(screen.getByLabelText("Name:")).toHaveTextContent(
			"Stairway to heaven"
		);
		expect(screen.getByLabelText("Length:")).toHaveTextContent("32.32");
		expect(screen.getByLabelText("ID:")).toHaveTextContent(
			"tu_23oin230fb32irji3"
		);

		// screen.debug();
	});
});
