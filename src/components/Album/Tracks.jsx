import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../store/ThemeContext.jsx";
const Tracks = ({ idx, trackName, trackDuration }) => {
  const { themeMode } = useContext(ThemeContext);
  const textStyle = themeMode === "light" ? "text-gray-500" : "text-white";
  const borderStyle =
    themeMode === "light" ? "border-gray-300" : "border-white";
  return (
    <>
      <div className="col-span-1 md:col-span-4 lg:col-span-4 border border-gray-300 p-4">
        <h1 className={`pb-4 mb-2 ${textStyle} ${borderStyle}`}>Top tracks</h1>
        <div
          className={`flex items-center justify-between pb-2 mb-2 border-b text-base ${textStyle} ${borderStyle}`}
        >
          <p className="">
            <b>{idx}.</b> {trackName}
          </p>
          <p className="pr-8">{trackDuration}</p>
        </div>
      </div>
    </>
  );
};

Tracks.propTypes = {
  idx: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  trackDuration: PropTypes.string.isRequired,
};

export default Tracks;
