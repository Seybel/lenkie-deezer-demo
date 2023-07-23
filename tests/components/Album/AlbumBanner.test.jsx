import { render, screen } from "@testing-library/react";
import AlbumBanner from "../../../src/components/Album/AlbumBanner";
import { formatFanNumber } from "../../../src/utils/numberFormatter";

describe("AlbumBanner", () => {
  // Tests that the AlbumBanner component renders with valid props
  it("renders valid props", () => {
    const coverImgSrc = "https://example.com/image.jpg";
    const artistName = "Bruno Mars";
    const fansAmount = "202341";
    render(
      <AlbumBanner
        coverImgSrc={coverImgSrc}
        artistName={artistName}
        fansAmount={fansAmount}
      />
    );
    const albumBanner = screen.getByTestId("album-banner");
    expect(albumBanner).toBeInTheDocument();
  });

  // Tests that the artist name is displayed correctly
  it("artistName displayed correctly", () => {
    const coverImgSrc = "https://example.com/image.jpg";
    const artistName = "Bruno Mars";
    const fansAmount = "202341";
    render(
      <AlbumBanner
        coverImgSrc={coverImgSrc}
        artistName={artistName}
        fansAmount={fansAmount}
      />
    );
    const names = screen.getAllByText("Bruno Mars");
    expect(names.length).toBeGreaterThan(0);
  });

  // Tests that the fansAmount is displayed correctly
  it("fansAmount displayed correctly", () => {
    const fansAmount = "202341";
    render(
      <AlbumBanner coverImgSrc="" artistName="" fansAmount={fansAmount} />
    );
    const fansAmountText = screen.getAllByText(
      `${formatFanNumber(fansAmount)} fans`
    );
    expect(fansAmountText.length).toBeGreaterThan(0);
  });

  // Tests that the component renders with missing coverImgSrc prop
  it("renders with missing coverImgSrc prop", () => {
    const { queryByAltText } = render(
      <AlbumBanner artistName="Bruno Mars" fansAmount="202341" />
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });

  // Tests that the component renders with invalid coverImgSrc prop
  it("renders with invalid coverImgSrc prop", () => {
    const { queryByAltText } = render(
      <AlbumBanner
        coverImgSrc={null}
        artistName="Bruno Mars"
        fansAmount="202341"
      />
    );
    expect(queryByAltText("")).not.toBeInTheDocument();
  });

  // Tests that the Tracks component is rendered
  it("renders track component", () => {
    render(<AlbumBanner covercoverImgSrc="" artistName="" fansAmount="" />);
    const tracksComponent = screen.getByRole("heading", {
      name: /top tracks/i,
    });
    expect(tracksComponent).toBeInTheDocument();
  });
});
