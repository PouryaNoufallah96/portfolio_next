import { ReactNode } from "react";

import clsx from "clsx";

interface IContainerProps {
  children: ReactNode;
  reverse?: boolean;
}

const Container = ({
  children,
  reverse = false,
}: IContainerProps) => {


  const classes = clsx(
    "w-full flex items-center justify-center ",
    {
      "bg-gradient-to-b  from-gray-800 to-gray-900": reverse,
      "bg-gradient-to-b  from-gray-900 to-gray-800": !reverse,
    }
  );

  return (
    <section className={classes}>
      <div className="w-full md:container flex flex-col gap-8 p-3 md:p-4 z-10">
        {children}
      </div>
    </section>
  );
};

export default Container;
