import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text } from "../../components";

export default function ShopCategoriesitemsPagePage() {
  return (
    <>
      <Helmet>
        <title>Albetre's ecom</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[133px] bg-blue_gray-50">
        <div className="flex flex-col items-center justify-start w-full max-w-[1310px]">
          <div className="flex flex-col items-end justify-start w-full gap-[106px]">
            <div className="flex flex-col items-start justify-start w-[93%]">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col items-start justify-start w-[58%] gap-[42px]">
                  <div className="flex flex-row justify-between items-start w-full">
                    <Text as="p" className="mt-[15px] tracking-[-0.60px]">
                      USD
                    </Text>
                    <Heading as="h1" className="tracking-[-0.40px]">
                      Header
                    </Heading>
                  </div>
                  <Heading size="md" as="h2" className="tracking-[-1.08px]">
                    Shop
                  </Heading>
                </div>
                <div className="flex flex-col items-end justify-start mt-4 gap-1.5">
                  <a href="#" className="mr-[103px]">
                    <Text as="p" className="tracking-[-0.60px]">
                      Support
                    </Text>
                  </a>
                  <Button color="gray_500" size="md" className="w-full">
                    Cart
                  </Button>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-full mt-2 gap-[133px]">
                <Text size="lg" as="p" className="w-2/5 mb-10 !text-gray-500_02 tracking-[-0.40px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </Text>
                <Text size="xl" as="p" className="mt-[51px] !text-black-900_01 tracking-[-0.20px]">
                  Search Functionality
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center mt-3 gap-[22px]">
                <Heading size="s" as="h3" className="tracking-[-0.55px]">
                  Filters
                </Heading>
                <Heading size="xs" as="h4" className="tracking-[-0.40px]">
                  Categories
                </Heading>
              </div>
              <div className="flex flex-row justify-between items-center w-[64%] mt-[11px] ml-[108px] bg-blue_gray-100">
                <div className="h-[21px] w-[8%] ml-[7px] bg-gray-600" />
                <div className="h-[21px] w-[8%] bg-gray-600" />
                <div className="h-[21px] w-[8%] bg-gray-600" />
                <div className="h-[21px] w-[8%] bg-gray-600" />
                <div className="h-[21px] w-[8%] bg-gray-600" />
                <div className="flex flex-row justify-between w-[21%]">
                  <div className="h-[21px] w-[38%] mb-px bg-gray-600" />
                  <div className="h-[21px] w-[38%] bg-gray-600" />
                </div>
              </div>
              <div className="w-[69%] mt-[72px] ml-[85px] gap-5 grid-cols-3 grid min-h-[auto]">
                <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[331px] w-full" />
                <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[331px] w-full" />
                <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[331px] w-full" />
                <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[331px] w-full" />
                <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[331px] w-full" />
                <Img src="images/img_product_card.svg" alt="productcard_one" className="h-[331px] w-full" />
              </div>
              <Button size="sm" className="mt-[38px] ml-[343px] min-w-[312px]">
                Button
              </Button>
            </div>
            <div className="h-px w-full mr-2.5 bg-gray-700" />
          </div>
        </div>
        <footer className="flex justify-center items-center w-full pl-[77px] pr-14 py-[77px] bg-blue_gray-100">
          <Heading as="h1" className="mb-[26px] ml-[422px] tracking-[-0.40px]">
            footer{" "}
          </Heading>
        </footer>
      </div>
    </>
  );
}
