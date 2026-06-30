import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome Component", () => {
  test("renders the name and age correctly", () => {
    render(<Welcome name="Jimmy" age={37} />);

    expect(
      screen.getByText("Welcome")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Welcome, Jimmy!")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Your age is 37.")
    ).toBeInTheDocument();
  });
});