import React from "react";
interface Props {
  children: string;
}
const CustomLabel = ({ children }: Props) => {
  return <label className="block mb-2">{children}</label>;
};

export default CustomLabel;
