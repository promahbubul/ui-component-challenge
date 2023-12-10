import React, { useState } from "react";
import PrimaryAccrodianCard from "./PrimaryAccordianCard";
import CardContainer from "../../ui/CardContainer/CardContainer";

const PrimaryAccordian = ({ title, subtitle }) => {
  return (
    <>
      <CardContainer title="Primary Accordion" subtitle={subtitle}>
        <div className="mt-5">
          <PrimaryAccrodianCard
            rounded="rounded-md rounded-b-none"
            border="border-b border-white"
            title="Accordion Item 1"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
          <PrimaryAccrodianCard
            border="border-b border-white"
            title="Accordion Item 2"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
          <PrimaryAccrodianCard
            cardBorder="border-b rounded-t-none rounded-md "
            rounded="rounded-md rounded-t-none "
            title="Accordion Item 3"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
        </div>
      </CardContainer>
    </>
  );
};

export default PrimaryAccordian;
