import React from "react";
import { Img, Text } from "./..";

export default function DetailsPageQuantityinput({ quantitynumber = "1", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_subtract.svg" alt="subtract_one" className="h-5 w-5 opacity-0.5" />
      <Text size="md" as="p" className="mt-1 mb-[3px] !text-black-900 tracking-[-0.30px] !font-inter text-center">
        {quantitynumber}
      </Text>
      <Img src="images/img_add.svg" alt="add_one" className="h-5 w-5 opacity-0.5" />
    </div>
  );
}
