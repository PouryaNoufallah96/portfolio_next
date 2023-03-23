import React from "react";

import { Parallax } from "react-scroll-parallax";

import { ListItemProp } from "@/types/common/common";

interface ITimelineItem {
  date: string;
  title: string;
  description: string;
}

interface ITimelineProps {
  description: string;
  data: ITimelineItem[];
  reverse?: boolean;
}

const TimelineItem = React.memo(
  ({ index, item }: ListItemProp<ITimelineItem>) => {
    return (
      <Parallax key={`timeline-${index}`} speed={50}>
        <div
          className={`mb-8  justify-between items-center w-full ${
            index % 2 === 0 ? "flex-row-reverse" : "flex"
          }`}
        >
          <div className="order-1 w-5/12"></div>
          <div
            className={`order-1 w-5/12 px-1 py-4   ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <p className="mb-3 text-sm lg:text-base text-indigo-300">{item.date}</p>
            <p className="mb-3 font-bold  text-base lg:text-2xl">{item.title}</p>
            <p className="text-xs lg:text-base leading-snug text-gray-50 text-opacity-100">
              {item.description}
            </p>
          </div>
        </div>
      </Parallax>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

const Timeline = ({ description, data, reverse = false }: ITimelineProps) => {
  return (
    <div
      className={`flex flex-col items-start ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full sticky lg:top-8 lg:w-1/3 my-4 lg:mt-12 px-0 lg:px-8">
        <p className="text-indigo-300 font-bold ">{description}</p>
      </div>
      <div className="flex-1 w-full relative wrap overflow-hidden p-0 lg:p-10 h-full">
        <div className="border-2-2 border-yellow-555 absolute h-full right-1/2 border-2 rounded border-indigo-600 "></div>
        <div className="border-2-2 border-yellow-555 absolute h-full left-1/2 border-2 rounded border-indigo-600 "></div>

        {data.map((item: ITimelineItem, index: number) => (
          <TimelineItem key={`item_${index}`} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
