import CardContainer from "../../ui/CardContainer/CardContainer";
import AdvancedAccordianCard from "./AdvancedAccordianCard";
import jobImage1 from "../../../assets/job/avatar-10.jpg";
import jobImage2 from '../../../assets/job/avatar-19.jpg'

const AdvancedAccordian = ({ title, subtitle }) => {
  return (
    <>
      <CardContainer title={title} subtitle={subtitle}>
        <div className="mt-5 flex flex-col gap-5">
          <AdvancedAccordianCard
            image={jobImage1}
            rounded="rounded-md"
            name="Simon Tods"
            jobtitle="Frontend Developer"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />

          <AdvancedAccordianCard
            image={jobImage2}
            rounded="rounded-md"
            name="Konnor Guzman"
            jobtitle="Frontend Developer"
            title="Accordion Item 2"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
          <AdvancedAccordianCard
            image={jobImage1}
            rounded="rounded-md"
            name="Derrick Simmons"
            jobtitle="UI/UX Designer"
            title="Accordion Item 3"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum magni officiis possimus repellendus. Accusantium adipisci aliquid praesentium quaerat voluptate."
          />
        </div>
      </CardContainer>
    </>
  );
};

export default AdvancedAccordian;
