import PropTypes from "prop-types";
import { formatFanNumber } from "../../utils/numberFormatter.js";
import Tracks from "./Tracks.jsx";
const AlbumBanner = ({ coverImgSrc, artistName, fansAmount }) => {
  const bannerCover = {
    backgroundImage: `url(${coverImgSrc})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="grid grid-cols-1 gap-2 md:grid-cols-12 my-6 mx-8"
      data-testid="album-banner"
    >
      {/* Hidden on small screens */}
      <div
        className="relative col-span-1 hidden md:block md:col-span-8 lg:col-span-8 bg-cover bg-center h-64"
        style={{ ...bannerCover, height: "65vh" }}
      >
        {/* Add a dark shadow overlay on the cover art */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 px-7 py-12 text-white">
          {/* Banner text - name & fan count */}
          <h1 className="font-bold text-5xl mb-2 hidden md:block">
            {artistName}
          </h1>
          <p className="text-xl mb-1 hidden md:block">
            {formatFanNumber(fansAmount)} fans
          </p>
        </div>
      </div>

      {/* Hidden on large screens */}
      <div className="md:hidden">
        <div
          className="relative col-span-1 md:hidden md:col-span-8 lg:col-span-8 bg-cover bg-center h-72"
          style={bannerCover}
        >
          {/* Add a dark shadow overlay on the cover art */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="px-4 md:px-7 py-7 md:py-12">
          {/* Banner text - name & fan count */}
          <h1 className="font-bold text-3xl mb-2">{artistName}</h1>
          <p className="text-base mb-1">{formatFanNumber(fansAmount)} fans</p>
        </div>
      </div>

      {/* Tracks Start */}
      <Tracks />
      {/* Tracks End */}
    </div>
  );
};

AlbumBanner.propTypes = {
  coverImgSrc: PropTypes.string,
  artistName: PropTypes.string.isRequired,
  fansAmount: PropTypes.number.isRequired,
};

export default AlbumBanner;
