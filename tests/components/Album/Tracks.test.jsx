import { render, screen } from "@testing-library/react";
import Tracks from "../../../src/components/Album/Tracks";

describe("Tracks_function", () => {
  // Tests that the component renders with valid props
  it("renders valid props", () => {
    const idx = 1;
    const trackName = "Track 1";
    const trackDuration = "3:30";
    render(
      <Tracks idx={idx} trackName={trackName} trackDuration={trackDuration} />
    );

    const trackNameElement = screen.getByText(trackName);
    expect(trackNameElement).toBeInTheDocument();
  });

  // Tests that the component displays the track name and duration
  it("renders track info", () => {
    const { getByText } = render(
      <Tracks idx={1} trackName="Track 1" trackDuration="3:30" />
    );
    expect(getByText("Track 1")).toBeInTheDocument();
    expect(getByText("3:30")).toBeInTheDocument();
  });

  // Tests that the component handles null props
  it("handles null props", () => {
    render(<Tracks idx={null} trackName={null} trackDuration={null} />);
    expect(screen.getByText("Top tracks")).toBeInTheDocument();
  });
});
