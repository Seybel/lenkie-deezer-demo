import React from "react";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
  ({ inputClassName, id, type, label, placeholder }, ref) => {
    const inputClassWhiteBg =
      "block w-full p-4 pl-10 pr-3 py-3 text-sm dark:text-gray-400 border border-gray-300 rounded-lg bg-gray-50 white:bg-gray-400 border-gray-300 dark:placeholder-gray-400 focus:outline-none";

    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            {label}
          </label>
        )}

        <input
          className={`${inputClassWhiteBg} ${inputClassName}`}
          id={id}
          ref={ref}
          type={type}
          aria-label={label}
          placeholder={placeholder || ""}
        />
      </div>
    );
  }
);

Input.displayName = "CustomInput";
Input.propTypes = {
  inputClassName: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
