import React, { useState } from "react";
import BorderBottomCard from "./BorderBottomCard";
import CardContainer from "../../ui/CardContainer/CardContainer";




const BorderBottom = () => {

  return (
    <>
      <CardContainer
        title="Border Bottom
"
        subtitle="The accordion component allows the user to show and hide sections of related content on a page. Check out code for detail of usage."
      >
        <BorderBottomCard
          title="Accordion Item 1"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
        <BorderBottomCard
          title="Accordion Item 2"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
        <BorderBottomCard
          title="Accordion Item 3"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
      </CardContainer>
    </>
  );
};

export default BorderBottom;
