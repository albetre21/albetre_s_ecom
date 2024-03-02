import React from "react";
import { Text, Heading } from "./..";

export default function CartPageHorizontal({
  title = "Natural Honey Bottle",
  sizel = "Size: L",
  quantitycounter = "Quantity: 1",
  price = "$99",
  removebutton = "Remove",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-center w-[63%] gap-3">
          <div className="h-[133px] w-[37%] bg-gray-400" />
          <div className="flex flex-col items-start justify-start w-3/5 gap-[9px]">
            <Heading size="s" as="h1" className="tracking-[-0.55px]">
              {title}
            </Heading>
            <Text size="xs" as="p" className="!text-black-900_01 tracking-[-0.40px]">
              {sizel}
            </Text>
            <Text size="xs" as="p" className="!text-black-900_01 tracking-[-0.40px]">
              {quantitycounter}
            </Text>
            <Heading size="s" as="h2" className="tracking-[-0.55px]">
              {price}
            </Heading>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[22px]">
          <Text size="xs" as="p" className="!text-black-900 tracking-[-0.40px]">
            by Vendor Name
          </Text>
          <Text size="xs" as="p" className="!text-black-900_01 tracking-[-0.40px] underline">
            {removebutton}
          </Text>
        </div>
      </div>
    </div>
  );
}
