import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../../../src/components/UI/Input";

describe("Custom Input Field", () => {
  // Tests that the input element accepts user input
  it("input element accepts user input", () => {
    render(<Input type="text" />);
    const inputElement = screen.getByRole("textbox");
    // Simulate user input
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
    // Check if the input value is updated
    expect(inputElement).toHaveValue("Hello, World!");
  });

  //   Tests that the input element is rendered with custom props
  it("renders with custom props", () => {
    const labelText = "Custom Label";
    const inputRef = React.createRef();
    const { getByLabelText } = render(
      <Input
        inputClassName="custom-class"
        id="custom-id"
        type="password"
        label={labelText}
        ref={inputRef}
        placeholder="Custom Placeholder"
      />
    );

    const inputElement = getByLabelText(labelText);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      "block w-full p-4 pl-10 pr-3 py-3 text-sm dark:text-gray-400 border border-gray-300 rounded-lg bg-gray-50 white:bg-gray-400 border-gray-300 dark:placeholder-gray-400 focus:outline-none custom-class"
    );
    expect(inputElement).toHaveAttribute("type", "password");
    expect(inputElement).toHaveAttribute("id", "custom-id");
    expect(inputElement).toHaveAttribute("placeholder", "Custom Placeholder");

    // Interact with the input - using the ref in this case
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
    expect(inputRef.current).toHaveValue("Hello, World!");
  });

  // Tests that the function renders an input field with default styles and attributes
  it("test default input", () => {
    const { getByRole } = render(<Input />);
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      "block w-full p-4 pl-10 pr-3 py-3 text-sm dark:text-gray-400 border border-gray-300 rounded-lg bg-gray-50 white:bg-gray-400 border-gray-300 dark:placeholder-gray-400 focus:outline-none"
    );
  });

  // Tests that the function renders an input field with a label when passed as a prop
  it("test input with label", () => {
    const { getByRole, getByLabelText } = render(
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
    );
    const input = getByRole("textbox");
    const label = getByLabelText("Username");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  // Tests that the function renders an input field without a label when label prop is not passed
  it("test input without label", () => {
    const { queryByLabelText } = render(<Input id="username" />);
    const label = queryByLabelText("Username");
    expect(label).not.toBeInTheDocument();
  });

  // Tests that the function renders an input field with an empty placeholder when placeholder prop is not passed
  it("test input with empty placeholder", () => {
    const { getByRole } = render(<Input id="username" />);
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "");
  });
});
