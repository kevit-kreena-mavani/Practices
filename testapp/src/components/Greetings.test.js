import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

//test suites : describe =>globally available function => in that anonymous function we describe all our tests

describe("Greeting component", () => {
  test("render hello world as text", () => {
    //arrange
    render(<Greetings />);

    //act
    //nothing...

    //asserts
    const helloWorldElement = screen.getByText("hello world", { exact: false });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button is not clicked", () => {
    render(<Greetings />);
    const outputElement = screen.getByText("good to see you", { exact: false });

    expect(outputElement).toBeInTheDocument();
  });

  test("render 'changed!!' if button was clicked", () => {
    render(<Greetings />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("Changed!!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if button was clicked", () => {
    render(<Greetings />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText("good to see you" , {exact :false});
    expect(outputElement).toBeNull();
  });
});
