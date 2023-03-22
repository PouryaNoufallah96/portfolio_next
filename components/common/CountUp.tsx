import clsx from "clsx";
import CountUp from "react-countup";

interface ICountUpProps {
  value: number;
  delay?: number;
  duration?: number;
  className?: string;
}

const MyCountUp = ({
  value,
  delay = 0,
  duration = 3,
  className,
}: ICountUpProps) => {
  const classes = clsx(
    "rounded-full font-semibold text-sm shadow bg-indigo-300 text-gray-900 px-3 flex justify-center items-center",
    className
  );
  return (
    <div className={classes}>
      <h1>
        <CountUp delay={delay} end={value} duration={duration} />
      </h1>
    </div>
  );
};

export default MyCountUp;
