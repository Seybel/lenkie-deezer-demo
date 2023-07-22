import { render, screen } from "@testing-library/react";
import Card from "../../../src/components/UI/Card.jsx";

describe("Card", () => {
  // Tests that the component renders with valid props
  it("renders valid props", () => {
    const { getByAltText, getByText } = render(
      <Card imgSrc="test.jpg" artistName="Bruno Mars" fansAmount="202341" />
    );
    expect(getByAltText("test.jpg")).toBeInTheDocument();
    expect(getByText("Bruno Mars")).toBeInTheDocument();
    expect(getByText(/202341/i)).toBeInTheDocument();
  });

  // Tests that the artist name is displayed correctly
  it("artistName displayed correctly", () => {
    const imgSrc = "https://example.com/image.jpg";
    const artistName = "Bruno Mars";
    const fansAmount = "202341";
    render(
      <Card imgSrc={imgSrc} artistName={artistName} fansAmount={fansAmount} />
    );
    const name = screen.getByText(artistName);
    expect(name).toBeInTheDocument();
  });

  // Tests that the fans amount is displayed correctly
  it("fansAmount displayed correctly", () => {
    const imgSrc = "https://example.com/image.jpg";
    const artistName = "Bruno Mars";
    const fansAmount = "202341";
    render(
      <Card imgSrc={imgSrc} artistName={artistName} fansAmount={fansAmount} />
    );

    const fans = screen.getByText(new RegExp(fansAmount, "i"));
    expect(fans).toBeInTheDocument();
  });

  // Tests that the component renders with missing imgSrc prop
  it("renders with missing imgSrc prop", () => {
    const { queryByAltText } = render(
      <Card artistName="Bruno Mars" fansAmount="202341" />
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });

  // Tests that the component renders with invalid imgSrc prop
  it("renders with invalid imgSrc prop", () => {
    const { queryByAltText } = render(
      <Card imgSrc={null} artistName="Bruno Mars" fansAmount="202341" />
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });
});
