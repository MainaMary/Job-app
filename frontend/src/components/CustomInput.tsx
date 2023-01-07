import React, { forwardRef, HTMLInputTypeAttribute } from "react";
interface InptProps {
  onChange?: (x: any) => void;
  type: string;
  placeholder?: string;
  name?: string;
  value: string;
}

const CustomInput = forwardRef(
  (props: InptProps, ref: HTMLInputTypeAttribute | any) => {
    const { onChange, type, placeholder, name, value } = props;
    return (
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        ref={ref}
      />
    );
  }
);

export default CustomInput;
