import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { links } from "@/utils/data/particles/links";
import TextTransition, { presets } from "react-text-transition";
import Typed from "typed.js";
import SocialItem from "./Social";

interface IHeroSectionProps {
  name: string;
  descriptions: string[];
}

const HeroSection = ({ name, descriptions }: IHeroSectionProps) => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [name],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const descriptionsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(descriptionsTransition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      className={`h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800`}
    >
      <div className="relative h-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={links}
          className="absolute w-full h-full"
        />
        <section className="flex flex-col items-center justify-center h-full gap-10 text-slate-100">
          <Image
            src="/images/avatar.jpg"
            alt="Pourya Nofallah"
            className="w-32 h-32 rounded-full md:w-64 md:h-64"
            width={256}
            height={256}
            priority
          />
          <h1 className="text-2xl font-bold sm:text:3xl md:text-4xl lg:text-5xl xl:text-7xl">
            {"{{"}
            <span ref={nameEl}></span>
            {"}}"}
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex  gap-1.5">
            <span>I am</span>
            <TextTransition springConfig={presets.gentle}>
              <span className="underline  decoration-purple-200">
                {descriptions[index % descriptions.length]}
              </span>
            </TextTransition>
          </h2>
          <div className="flex gap-10">
            <SocialItem
            delay={1.5}
              icon="linkedin"
              link="https://www.linkedin.com/in/pourya-nofallah"
              title="Linkedin"
            />
            <SocialItem
            delay={2.5}
              icon="github"
              link="https://github.com/PouryaNoufallah96"
              title="Github"
            />
            <SocialItem
            delay={3.5}
              icon="yahoo"
              link="mailto:pouryanoufallah@yahoo.com"
              title="Yahoo"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
