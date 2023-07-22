import PropTypes from "prop-types";

const AlbumCard = ({ imgSrc, albumName, albumYear }) => {
  return (
    <>
      <div className="overflow-hidden">
        <img className="w-full" src={imgSrc} alt={imgSrc} />
        <div className="pt-2 pb-2 md:pb-10">
          <div className="font-bold text-lg mb-0">{albumName}</div>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            {albumYear}
          </p>
        </div>
      </div>
    </>
  );
};

AlbumCard.propTypes = {
  imgSrc: PropTypes.string,
  albumName: PropTypes.string.isRequired,
  albumYear: (PropTypes.number || PropTypes.string).isRequired,
};

export default AlbumCard;
