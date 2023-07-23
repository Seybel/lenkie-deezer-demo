import { render, screen } from "@testing-library/react";
import Card from "../../../src/components/UI/Card.jsx";
import { formatFanNumber } from "../../../src/utils/numberFormatter.js";

describe("Card", () => {
  // Tests that the Card component renders with valid props
  it("renders valid props", () => {
    const imgSrc = "https://example.com/image.jpg";
    const artistName = "Bruno Mars";
    const fansAmount = "202341";
    render(
      <Card imgSrc={imgSrc} artistName={artistName} fansAmount={fansAmount} />
    );
    const imgElement = screen.getByAltText(imgSrc);
    const artistNameElement = screen.getByText(artistName);
    const fansAmountElement = screen.getByText(
      `${formatFanNumber(fansAmount)} Fans`
    );
    expect(imgElement).toBeInTheDocument();
    expect(artistNameElement).toBeInTheDocument();
    expect(fansAmountElement).toBeInTheDocument();
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

  // Tests that fansAmount is displayed correctly in the Card component
  it("fansAmount displayed correctly", () => {
    const fansAmount = "202341";
    const { getByText } = render(
      <Card imgSrc="test.jpg" artistName="Bruno Mars" fansAmount={fansAmount} />
    );
    const fansAmountText = getByText(`${formatFanNumber(fansAmount)} Fans`);
    expect(fansAmountText).toBeInTheDocument();
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
