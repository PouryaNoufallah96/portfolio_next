import {
  HeroSection,
  About,
  Experience,
  Education,
  Certificate,
  Skill,
  Project,
  Language,
  DevInfo,
  Hire
} from "@/components/pages/home";
import { IHomeProps } from "@/types/pages/home";

const Home = (props: IHomeProps) => {
  return (
    <>
      <HeroSection name={props.name} descriptions={props.descriptions} />
      <About />
      <DevInfo />
      <Skill />
      <Experience />
      <Project/>
      <Certificate />
      <Education />
      <Language />
      <Hire />
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      name: "Pourya Nofallah",
      descriptions: [
        "a Full-Stack Developer",
        "a Freelancer",
        "a Gamer",
        "a Trader",
      ],
    },
  };
}

export default Home;
