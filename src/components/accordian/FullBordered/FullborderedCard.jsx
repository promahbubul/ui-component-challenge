import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
  

const FullBorderedCard = ({title, subtitle}) => {
  const [accordian, setAccordian] = useState(false);
  return (
    <>
      <div className="text-sm border-b border-grayOne   ">
        <div className="p-3">
          <div
            onClick={() => setAccordian(!accordian)}
            className="flex flex-row justify-between cursor-pointer"
          >
            <h4 className="text-lg font-semibold text-textOne py-2 ">{title}</h4>
            <button className="ease-in-out duration-600">
              {accordian ? (
                <IoIosArrowUp className="text-lg ease-in-out duration-600" />
              ) : (
                <IoIosArrowDown className="text-lg ease-in-out duration-600" />
              )}
            </button>
          </div>
          <div
            className={` grid ease-in-out duration-300 overflow-hidden ${
              accordian
                ? " grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="mb-3 ">{subtitle}</p>
              <div className="flex flex-row gap-2 ">
                <button className="border border-blue text-sm  rounded-full px-2 py-1 text-blue">
                  tab 1
                </button>
                <button className="border border-blue text-sm  rounded-full px-2 py-1 text-blue">
                  tab 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullBorderedCard