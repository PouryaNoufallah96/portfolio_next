import React from "react";
import Image from "next/image";

import { Card, Container } from "@/components/common";
import { ListItemProp } from "@/types/common/common";
import { skills } from "@/utils/data/skills";

interface ISkillItemProps {
  title: string;
  icon: string;
}

const SkillItem = React.memo(
  ({ index, item }: ListItemProp<ISkillItemProps>) => {
    return (
      <div className="p-2 text-sm text-gray-900 bg-indigo-300 shadow rounded-md flex items-center justify-center gap-1.5 hover:scale-105 transition-all ease-in">
        <Image
          src={`/images/skills/${item.icon}.svg`}
          alt={item.title}
          className="w-6 h-6"
          width={24}
          height={24}
        />
        <span>{item.title}</span>
      </div>
    );
  }
);

SkillItem.displayName = "SkillItem";

const Skill = () => {
  return (
    <Container>
      <Card title="Skills">
        <section className="flex flex-wrap gap-3">
          {skills.map((item: ISkillItemProps, index: number) => (
            <SkillItem key={`skill${index}`} index={index} item={item} />
          ))}
        </section>
      </Card>
    </Container>
  );
};

export default Skill;
