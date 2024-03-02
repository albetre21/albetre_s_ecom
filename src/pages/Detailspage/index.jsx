import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button } from "../../components";
import DetailsPageQuantityinput from "../../components/DetailsPageQuantityinput";

export default function DetailspagePage() {
  return (
    <>
      <Helmet>
        <title>Albetre's ecom</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-3 bg-blue_gray-50">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start w-full max-w-[1081px]">
            <div className="flex flex-col items-start justify-start w-full gap-[95px]">
              <header className="flex flex-col w-full ml-[35px]">
                <div className="flex flex-row justify-start w-full z-[1]">
                  <div className="flex flex-row justify-between items-start w-full">
                    <Text as="p" className="tracking-[-0.60px]">
                      USD
                    </Text>
                    <div className="flex flex-row justify-between items-start w-[71%]">
                      <Text as="p" className="right-0 top-[4%] m-auto tracking-[-0.60px] absolute">
                        FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.{" "}
                      </Text>
                      <div className="flex flex-row justify-center w-[36%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text as="p" className="tracking-[-0.60px]">
                            Support
                          </Text>
                          <div className="flex flex-row justify-center w-full mt-[-18px] p-2 bg-gray-500">
                            <Heading size="xl" as="h1" className="mx-[83px] tracking-[-0.40px] text-center">
                              Cart
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full ml-[-1239px]">
                  <div className="flex flex-row justify-between items-start w-full">
                    <a href="#" className="mt-[3px]">
                      <Text as="p" className="tracking-[-0.60px]">
                        USD
                      </Text>
                    </a>
                    <div className="flex flex-row justify-between items-center w-3/4">
                      <div className="h-24 w-[48%] relative">
                        <Text as="p" className="right-0 top-[4%] m-auto tracking-[-0.60px] absolute">
                          FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.{" "}
                        </Text>
                        <Heading as="h1" className="w-max left-0 bottom-0 top-0 m-auto tracking-[-0.40px] absolute">
                          Header
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-center w-[34%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <a href="#">
                            <Text as="p" className="tracking-[-0.60px]">
                              Support
                            </Text>
                          </a>
                          <div className="flex flex-row justify-center w-full mt-[-18px] p-2 bg-gray-500">
                            <Heading size="xl" as="h1" className="mx-[83px] tracking-[-0.40px] text-center">
                              Cart
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="flex flex-row justify-between items-start w-[85%]">
                <div className="h-[491px] w-[44%] mt-[3px] bg-gray-400" />
                <div className="flex flex-row justify-start items-center w-[45%] gap-[18px]">
                  <div className="flex flex-col items-start justify-start w-[76%]">
                    <Heading size="md" as="h1" className="ml-[3px] tracking-[-1.50px]">
                      Natural Honey Bottle
                    </Heading>
                    <Text size="md" as="p" className="mt-5 ml-[3px] !text-black-900_01 tracking-[-0.30px]">
                      $99
                    </Text>
                    <Text size="lg" as="p" className="w-[98%] mt-5 !text-black-900 tracking-[-0.40px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="mt-[68px] ml-3.5 !text-black-900_87 tracking-[-0.30px] opacity-0.5"
                    >
                      Size
                    </Text>
                    <div className="flex flex-row w-[46%] mt-3 ml-[15px] gap-2">
                      <div className="flex flex-col items-center justify-start h-[50px] w-[31%]">
                        <Button color="black_900" variant="outline" className="min-w-[50px]">
                          S
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[50px] w-[31%]">
                        <Button color="black_900" variant="outline" className="min-w-[50px]">
                          M
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[50px] w-[31%]">
                        <Button color="black_900" variant="outline" className="min-w-[50px]">
                          L
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start mt-[23px] ml-[15px]">
                      <Button color="gray_400_01" className="w-full border-gray-400_01 border-[0.5px] border-solid">
                        Add to Cart - $188
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[21%] gap-2">
                    <Text size="md" as="p" className="!text-black-900_87 tracking-[-0.30px] opacity-0.5">
                      Quantity
                    </Text>
                    <DetailsPageQuantityinput className="flex flex-row justify-between w-full p-[9px] border-black-900_01 border border-solid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full mt-[346px] bg-gray-700 max-w-[1300px]" />
          <div className="h-[277px] w-full mt-[108px] relative">
            <Text
              as="p"
              className="w-max bottom-[5%] right-0 left-0 m-auto tracking-[2.00px] uppercase text-center absolute"
            >
              Copyrights site.com. All Rights Reserved
            </Text>
            <footer className="flex justify-center items-center w-full pl-[77px] pr-14 left-0 bottom-0 right-0 top-0 py-[77px] m-auto bg-blue_gray-100 absolute">
              <Heading as="h1" className="mb-[26px] ml-[471px] tracking-[-0.40px]">
                footer{" "}
              </Heading>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
