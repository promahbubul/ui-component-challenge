import React, { useState } from "react";
import BasicAccordianCard from "./BasicAccordianCard";
import CardContainer from "../../ui/CardContainer/CardContainer";




const BasicAccordian = () => {

  return (
    <>
      <CardContainer
        title="Border Bottom
"
        subtitle="The accordion component allows the user to show and hide sections of related content on a page. Check out code for detail of usage."
      >
        <BasicAccordianCard
          title="Accordion Item 1"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
        <BasicAccordianCard
          title="Accordion Item 2"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
        <BasicAccordianCard
          title="Accordion Item 3"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
      </CardContainer>
    </>
  );
};

export default BasicAccordian;
