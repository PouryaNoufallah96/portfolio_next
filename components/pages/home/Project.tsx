import React from "react";
import Image from "next/image";

import { Card, Container } from "@/components/common";
import { Parallax } from "react-scroll-parallax";
import { otherProject, projectHighlights } from "@/utils/data/projects";

interface IProjectHighlightProps {
  title: string;
  link: string;
  description: string;
  date: string;
}

const Highlight = React.memo(
  ({ title, link, description, date }: IProjectHighlightProps) => {
    return (
      <div className="fancy-card">
        <span className="text-sm md:text-base text-semibold md:font-bold text-center">{title}</span>
        <img
          src={link}
          alt={title}
          className="aspect-video self-center"
        />
        <span className="text-sm">{date}</span>
        <span className="text-xs ">{description}</span>
      </div>
    );
  }
);

Highlight.displayName = "Highlight";

const Other = React.memo(
  ({ title, link, description, date }: IProjectHighlightProps) => {
    return (
      <Parallax speed={20}>
        <div className="fancy-card overflow-hidden">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-sm md:text-base font-bold ">{title}</span>
              <span className="text-xs md:text-sm">{date}</span>
              <span className="text-xs ">{description}</span>
            </div>
            <div className="text-xs md:text-sm">
              {link === "" ? (
                <span>Comming Soon</span>
              ) : (
                <a href={link} target="_blank">
                  Show
                </a>
              )}
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
);

Other.displayName = "Other";

const Projects = () => {
  return (
    <Container >
      <Card title="Projects">
        <section className="flex flex-col gap-4">
          <p className="font-bold mb-4">Highlights</p>
          <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
            {projectHighlights.map(
              (item: IProjectHighlightProps, index: number) => (
                <Highlight key={`highlight_${index}`} {...item} />
              )
            )}
          </div>

          <p className="font-bold mb-4">Others</p>
          <div className="overflow-hidden">
          {otherProject.map((item: IProjectHighlightProps, index: number) => (
            <Other key={`other_${index}`} {...item} />
          ))}
          </div>
       
        </section>
      </Card>
    </Container>
  );
};

export default Projects;
