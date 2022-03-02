import React from "react";

type Props = {
  className?: string;
  text: string;
};

const Checkbox = ({ className, text }: Props) => {
  return (
    <label className={className}>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
