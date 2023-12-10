import React from "react";
import BasicAccordian from "../../components/accordian/BasicAccordian/BasicAccordian";
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";
import BorderBottom from "../../components/accordian/BorderBottom/BorderBottom";
import FullBorder from "../../components/accordian/FullBordered/FullBordered";
import DevidedItems from "../../components/accordian/DevidedItems/DevidedItems";
import PrimaryAccordian from "../../components/accordian/PrimaryAccordian/PrimaryAccordian";
import AdvancedAccordian from "../../components/accordian/AdvancedAccordian/AdvancedAccordian";

const Accordian = () => {
  return (
    <div className="">
      <div className=" flex flex-row gap-3 py-5">
        <h3 className="text-white text-lg font-bold">Accordion</h3> |
        <p className="">Components</p>
        <IoIosArrowForward className="text-xl " />
        <p className="">Accordion</p>
      </div>
      <div className="flex flex-col gap-5">
        <BasicAccordian />
        <BorderBottom />
        <FullBorder />
        <DevidedItems
          title="Divided Items"
          subtitle="The accordion component allows the user to show and hide sections of related content on a page. Check out code for detail of usage."
        />
        <PrimaryAccordian
          title="Advanced Accordion"
          subtitle="The accordion component allows the user to show and hide sections of related content on a page. Check out code for detail of usage."
        />
        <AdvancedAccordian
          title="Advanced Accordion"
          subtitle="The accordion component allows the user to show and hide sections of related content on a page. Check out code for detail of usage."
        />
      </div>
    </div>
  );
};

export default Accordian;
