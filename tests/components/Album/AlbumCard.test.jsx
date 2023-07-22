import { render, screen } from "@testing-library/react";
import AlbumCard from "../../../src/components/Album/AlbumCard";

describe("AlbumCard", () => {
  // Tests that the component renders with valid props
  it("renders valid props", () => {
    const { getByAltText, getByText } = render(
      <AlbumCard imgSrc="test.jpg" albumName="Test Album" albumYear="2021" />
    );
    expect(getByAltText("test.jpg")).toBeInTheDocument();
    expect(getByText("Test Album")).toBeInTheDocument();
    expect(getByText("2021")).toBeInTheDocument();
  });

  // Tests that the album name is displayed correctly
  it("albumName displayed correctly", () => {
    const imgSrc = "https://example.com/image.jpg";
    const albumName = "Test Album";
    const albumYear = "2021";
    render(
      <AlbumCard imgSrc={imgSrc} albumName={albumName} albumYear={albumYear} />
    );
    const name = screen.getByText(albumName);
    expect(name).toBeInTheDocument();
  });

  // Tests that the album year is displayed correctly
  it("albumYear displayed correctly", () => {
    const imgSrc = "https://example.com/image.jpg";
    const albumName = "Test Album";
    const albumYear = "2021";
    render(
      <AlbumCard imgSrc={imgSrc} albumName={albumName} albumYear={albumYear} />
    );
    const year = screen.getByText(albumYear);
    expect(year).toBeInTheDocument();
  });

  // Tests that the component renders with missing imgSrc prop
  it("renders with missing imgSrc prop", () => {
    const { queryByAltText } = render(
      <AlbumCard albumName="Test Album" albumYear="2021" />
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });

  // Tests that the component renders with invalid imgSrc prop
  it("renders with invalid imgSrc prop", () => {
    const { queryByAltText } = render(
      <AlbumCard imgSrc={null} albumName="Test Album" albumYear="2021" />
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });
});
