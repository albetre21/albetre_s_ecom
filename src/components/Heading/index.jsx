import React from "react";

const sizes = {
  "2xl": "text-[81px] font-semibold leading-[96px]",
  xl: "text-6xl font-semibold leading-[71px]",
  s: "text-[22px] font-semibold leading-[26px]",
  md: "text-4xl font-semibold leading-[43px]",
  xs: "text-sm font-bold leading-[17px]",
  lg: "text-[56px] font-semibold leading-[66px]",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
