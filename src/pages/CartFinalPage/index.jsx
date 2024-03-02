import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Input } from "../../components";

export default function CartFinalPagePage() {
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
          <Text size="xl" as="p" className="mt-[55px] !text-black-900_01 tracking-[-0.20px]">
            Bought Items
          </Text>
          <div className="justify-center w-full mt-20 gap-[114px] grid-cols-2 grid min-h-[auto] max-w-[1078px]">
            <Input name="rectangle" className="w-full" />
            <Input name="rectangle" className="w-full" />
            <Input name="rectangle" className="w-full" />
            <Input name="rectangle" className="w-full" />
            <Input name="rectangle" className="w-full" />
            <Input name="rectangle" className="w-full" />
          </div>
          <Text size="xl" as="p" className="mt-[90px] !text-black-900_01 tracking-[-0.20px]">
            Success message or Confirmation{" "}
          </Text>
          <div className="h-px w-full mt-[213px] bg-gray-700 max-w-[1300px]" />
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
