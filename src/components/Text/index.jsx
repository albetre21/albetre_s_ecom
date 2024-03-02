import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-normal leading-7",
  s: "text-base font-medium",
  xl: "text-[62px] font-medium leading-[73px]",
  md: "text-lg font-normal leading-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
