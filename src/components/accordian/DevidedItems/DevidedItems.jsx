import React, { useState } from "react";
import DevidedItemCard from "./DevidedItemCard";
import CardContainer from "../../ui/CardContainer/CardContainer";




const DevidedItems = ({title, subtitle}) => {

  return (
    <>
      <CardContainer
        title={title}
        subtitle={subtitle}
      >
        <DevidedItemCard
          title="Accordion Item 1"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
        <DevidedItemCard
          title="Accordion Item 2"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
        <DevidedItemCard
          title="Accordion Item 3"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
        />
      </CardContainer>
    </>
  );
};

export default DevidedItems;
