import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_400_01: "bg-gray-400_01 text-black-900_01",
    black_900: "bg-black-900 text-white-A700",
    gray_500: "bg-gray-500 text-black-900_01",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
  },
  outline: {
    black_900: "border-black-900 border-[0.5px] border-solid text-black-900",
  },
};
const sizes = {
  md: "h-[89px] px-[35px] text-6xl",
  sm: "h-[62px] px-[35px] text-[32px]",
  xs: "h-[50px] px-[19px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "xs",
  color = "blue_gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer tracking-[-0.40px] font-semibold ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_400_01", "black_900", "gray_500", "blue_gray_100"]),
};

export { Button };
