import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button } from "../../components";
import CartPageHorizontal from "../../components/CartPageHorizontal";

export default function CartpagePage() {
  return (
    <>
      <Helmet>
        <title>Albetre's ecom</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[3px] bg-blue_gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <Heading as="h1" className="tracking-[-0.40px]">
            Header
          </Heading>
          <div className="flex flex-col items-start justify-start w-full mt-[52px] gap-4 max-w-[1053px]">
            <Heading size="md" as="h2" className="tracking-[-1.50px]">
              Your cart
            </Heading>
            <div className="flex flex-row justify-between items-start w-[77%] ml-1">
              <Text as="p" className="mt-px !text-black-900_01 tracking-[-0.20px]">
                Not ready to checkout? Continue Shopping
              </Text>
              <Heading size="s" as="h3" className="tracking-[-0.55px]">
                Order Summary
              </Heading>
            </div>
            <div className="flex flex-row justify-between items-center w-full ml-1">
              <div className="flex flex-col w-[54%] gap-[15px]">
                <CartPageHorizontal className="flex flex-row justify-center w-full" />
                <div className="w-px h-px bg-gray-500_01" />
                <CartPageHorizontal sizel="Size: S" price="$89" className="flex flex-row justify-center w-full" />
              </div>
              <div className="flex flex-col items-center justify-start w-[39%] gap-[35px]">
                <div className="flex flex-col items-center justify-start w-full gap-3.5">
                  <div className="flex flex-row justify-between w-full">
                    <Text size="xs" as="p" className="mb-px !text-black-900 tracking-[-0.30px]">
                      Subtotal
                    </Text>
                    <Text size="xs" as="p" className="!text-black-900 tracking-[-0.30px] text-right">
                      $188
                    </Text>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <Text size="xs" as="p" className="!text-black-900 tracking-[-0.30px]">
                      Shipping
                    </Text>
                    <Text size="xs" as="p" className="!text-black-900_99 tracking-[-0.30px] text-right opacity-0.7">
                      Calculated at the next step
                    </Text>
                  </div>
                  <div className="h-px w-full bg-black-900_01" />
                  <div className="flex flex-row justify-between w-full">
                    <Text size="xs" as="p" className="mb-px !text-black-900 tracking-[-0.30px]">
                      Total
                    </Text>
                    <Text size="xs" as="p" className="!text-black-900 tracking-[-0.30px] text-right">
                      $188
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[99%]">
                  <Button color="black_900" className="w-full border-black-900 border-[0.5px] border-solid">
                    Continue to checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full mt-[489px] bg-gray-700 max-w-[1300px]" />
          <div className="h-[277px] w-full mt-[108px] relative">
            <Text
              as="p"
              className="w-max bottom-[5%] right-0 left-0 m-auto tracking-[2.00px] uppercase text-center absolute"
            >
              Copyrights site.com. All Rights Reserved
            </Text>
            <Text
              as="p"
              className="w-max bottom-[5%] right-0 left-0 m-auto tracking-[2.00px] uppercase text-center absolute"
            >
              Copyrights site.com. All Rights Reserved
            </Text>
            <footer className="flex justify-center items-center w-full pl-[77px] pr-14 left-0 bottom-0 right-0 top-0 py-[77px] m-auto bg-blue_gray-100 absolute">
              <Heading as="h1" className="mb-[26px] ml-[503px] tracking-[-0.40px]">
                footer{" "}
              </Heading>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
