import React from "react";
import { useRef, useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext.jsx";

import Input from "../UI/Input.jsx";
import { SearchIcon } from "../Icons/SearchIcon.jsx";
import { LightIcon, DarkIcon } from "../Icons/ThemeIcon.jsx";
import lenkieDeezWhite from "../../assets/img/lenkie-deezer-white.png";
import lenkieDeezBlack from "../../assets/img/lenkie-deezer-black.png";

const Header = () => {
  const searchInputRef = useRef();
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  const defaultBgClass =
    "sticky top-0 z-40 mx-auto flex w-full flex-wrap items-center justify-between py-2 text-neutral-500 focus:text-neutral-700 lg:py-4";
  const headerBgWhiteTheme = "bg-white border-b border-gray-300";
  const headerBgBlackTheme =
    "bg-black text-white dark:border-gray-600 dark:bg-gray-800";
  const themeClass =
    themeMode === "light" ? headerBgWhiteTheme : headerBgBlackTheme;

  return (
    <>
      <nav className={`${themeClass} ${defaultBgClass}`}>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center space-x-8">
            <a
              className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                className="mr-2"
                src={themeMode === "light" ? lenkieDeezBlack : lenkieDeezWhite}
                alt="Lenkie Deezer Logo"
                loading="lazy"
              />
            </a>
            <form>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <Input
                  ref={searchInputRef}
                  type="search"
                  inputClassName="sm:w-[350px] lg:w-[1000px] transition duration-300 focus:ring-blue-400 hover:border-gray-400"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
          <div className="px-5 cursor-pointer">
            {themeMode === "light" && (
              <LightIcon onClickHandler={toggleTheme} />
            )}
            {themeMode === "dark" && <DarkIcon onClickHandler={toggleTheme} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
