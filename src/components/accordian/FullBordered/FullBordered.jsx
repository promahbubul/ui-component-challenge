import React, { useState } from "react";
import FullBorderedCard from "./FullborderedCard";
import CardContainer from "../../ui/CardContainer/CardContainer";




const FullBorder = () => {

  return (
    <>
      <CardContainer
        title="Full Bordered"
        subtitle="The accordion component allows the user to show and hide sections of related content on a page. Check out code for detail of usage."
      >
        <div className="border mt-5 border-grayOne rounded-md border-b-0">
          <FullBorderedCard
            title="Accordion Item 1"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
          <FullBorderedCard
            title="Accordion Item 2"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
          <FullBorderedCard
            title="Accordion Item 3"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
        </div>
      </CardContainer>
    </>
  );
};

export default FullBorder;
