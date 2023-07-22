import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext.jsx";
const Tracks = () => {
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
            <b>1.</b> In my room
          </p>
          <p className="pr-8">02:54</p>
        </div>
        <div
          className={`flex items-center justify-between border-b pb-2 mb-2 text-base ${textStyle} ${borderStyle}`}
        >
          <p className="">
            <b>2.</b> You and I
          </p>
          <p className="pr-8">02:54</p>
        </div>
        <div
          className={`flex items-center justify-between border-b pb-2 mb-2 text-base ${textStyle} ${borderStyle}`}
        >
          <p className="">
            <b>3.</b> Flinestones
          </p>
          <p className="pr-8">02:54</p>
        </div>
      </div>
    </>
  );
};

export default Tracks;
