import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button } from "../../components";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Albetre's ecom</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-blue_gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[108px] w-full relative">
            <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Heading as="h1" className="ml-[469px] tracking-[-0.40px] z-[1]">
                Header
              </Heading>
              <Img src="images/img_navbar.png" alt="navbar_one" className="w-full mt-[-47px] object-cover" />
            </div>
            <Text as="p" className="left-[10%] top-[15%] m-auto tracking-[-0.60px] absolute">
              USD
            </Text>
            <Button color="gray_500" size="md" className="bottom-[3%] right-[1%] m-auto min-w-[308px] absolute">
              Cart
            </Button>
          </div>
          <div className="flex flex-row justify-between w-full mt-[-3px] p-8 z-[1] bg-gray-400">
            <Img src="images/img_back.png" alt="back_one" className="w-[30px] mt-[214px] mb-[213px] object-cover" />
            <Img src="images/img_forward.png" alt="forward_one" className="w-[30px] mt-[214px] mb-[213px] object-cover" />
          </div>
          <div className="flex flex-row justify-center w-1/5 mt-[87px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Heading size="lg" as="h2" className="tracking-[-2.40px] text-center">
                Categories
              </Heading>
              <Heading size="lg" as="h3" className="mt-[-66px] tracking-[-2.40px] text-center">
                Categories
              </Heading>
            </div>
          </div>
          <div className="flex flex-row justify-center w-[44%] mt-3">
            <div className="flex flex-col items-center justify-start w-full">
              <Text size="lg" as="p" className="!text-gray-500_02 tracking-[-0.40px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
              
            </div>
          </div>
          <Button size="sm" className="min-w-[312px]">
            Button
          </Button>
          <Img src="images/img_frame_3.svg" alt="image" className="h-[400px] w-full mt-[57px] max-w-[1151px]" />
          <Heading size="lg" as="h2" className="mt-[116px] tracking-[-2.40px] text-center">
            Our latest arrivals
          </Heading>
          <Text size="lg" as="p" className="w-[44%] mt-[17px] !text-gray-500_02 tracking-[-0.40px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
          <Button size="sm" className="min-w-[312px]">
            Button
          </Button>
          <div className="flex flex-row w-full mt-[54px] gap-[25px] max-w-[1154px]">
            <div className="h-[521px] w-[32%] mt-[85px] bg-gray-400" />
            <div className="h-[521px] w-[32%] mb-[85px] bg-gray-400" />
            <div className="h-[521px] w-[32%] mt-[85px] bg-gray-400" />
          </div>
          <Heading size="lg" as="h2" className="mt-[148px] tracking-[-2.40px] text-center">
            Our Products
          </Heading>
          <Text size="lg" as="p" className="w-[44%] mt-[17px] !text-gray-500_02 tracking-[-0.40px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
          <Button size="sm" className="min-w-[312px]">
            Button
          </Button>
          <div className="flex flex-row justify-start w-full mt-16 gap-5 max-w-[1125px]">
            <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[459px]" />
            <Img src="images/img_product_card.svg" alt="productcard" className="h-[459px]" />
            <Img src="images/img_product_card.svg" alt="productcard" className="h-[459px]" />
          </div>
          <div className="h-px w-full mt-[125px] bg-gray-700 max-w-[1300px]" />
          <div className="h-[277px] w-full mt-[137px] relative">
            <Text
              as="p"
              className="w-max bottom-[15%] right-0 left-0 m-auto tracking-[2.00px] uppercase text-center absolute"
            >
              Copyrights site.com. All Rights Reserved
            </Text>
            <footer className="flex justify-center items-center w-full pl-[62px] pr-14 left-0 bottom-0 right-0 top-0 py-[62px] m-auto bg-blue_gray-100 absolute">
              <Heading as="h1" className="mb-14 ml-[470px] tracking-[-0.40px]">
                footer{" "}
              </Heading>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
