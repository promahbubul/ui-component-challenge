
import  React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import groupPhoto1 from "../../../assets/groupPhoto/avatar-8.jpg";
import groupPhoto2 from "../../../assets/groupPhoto/avatar-5.jpg";
import groupPhoto3 from "../../../assets/groupPhoto/avatar-16.jpg";
import groupPhoto4 from "../../../assets/groupPhoto/avatar-20.jpg";
  

const AdvancedAccordianCard = ({name,rounded, jobtitle, title, image, subtitle}) => {
    const [accordian, setAccordian] = useState(false)
  return (
    <>
      <div className="text-sm  rounded-md ">
        <div
          onClick={() => setAccordian(!accordian)}
          className={`flex flex-row bg-[#384766] py-3 px-5 justify-between cursor-pointer ${
            accordian && "rounded-b-none"
          } ${rounded}`}
        >
          <div className="flex flex-row gap-2">
            <img src={image} alt="" className="w-10 h-10 rounded-full" />
            <div className="">
              <h4 className="text-base font-normal text-white">{name}</h4>
              <p className="text-xs font-light">{jobtitle}</p>
            </div>
          </div>
          <button className="ease-in-out duration-600">
            {accordian ? (
              <IoIosArrowUp className="text-lg ease-in-out duration-600" />
            ) : (
              <IoIosArrowDown className="text-lg ease-in-out duration-600" />
            )}
          </button>
        </div>
        <div
          className={` grid  ease-in-out ${
            accordian && "py-2 px-5 border border-grayOne  rounded-b-md"
          } duration-300 overflow-hidden ${
            accordian
              ? " grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ">
            <p className="mb-3 ">{subtitle}</p>
            <div className="flex flex-row gap-2 justify-between ">
              {/* group photo */}
              <div className="flex flex-row">
                <img
                  className="w-10 h-10  hover:z-10 ease-in-out duration-700 border-4 border-[#26334d]   rounded-full "
                  src={groupPhoto1}
                  alt=""
                />
                <img
                  className="w-10 h-10 hover:z-10 -ml-5 border-4 border-[#26334d] rounded-full "
                  src={groupPhoto2}
                  alt=""
                />
                <img
                  className="w-10 h-10 hover:z-10 ease-in-out duration-700 -ml-5 border-4 border-[#26334d]  rounded-full "
                  src={groupPhoto3}
                  alt=""
                />
                <img
                  className="w-10 h-10 hover:z-10 ease-in-out duration-700 -ml-5 border-4 border-[#26334d]  rounded-full "
                  src={groupPhoto4}
                  alt=""
                />
              </div>
              {/* Link */}
              <button className="text-xm text-white px-[10px] py-[0px] font-black rounded-full bg-[#384766] hover:bg-[#465675]">
                <MdArrowOutward className="font-black text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedAccordianCard