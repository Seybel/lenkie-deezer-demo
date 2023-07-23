import { formatFanNumber } from "../../utils/numberFormatter";
import PropTypes from "prop-types";

const Card = ({ imgSrc, artistName, fansAmount }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg dark:shadow">
      <img className="w-full" src={imgSrc} alt={imgSrc} />
      <div className="px-3 pt-4 pb-8">
        <div className="font-bold text-lg mb-2">{artistName}</div>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {formatFanNumber(fansAmount)} Fans
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  artistName: PropTypes.string.isRequired,
  fansAmount: PropTypes.number.isRequired,
};

export default Card;
