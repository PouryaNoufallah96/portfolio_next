import Lottie from "lottie-react";

import { Container, CountUp } from "@/components/common";

import { Client, Coffee, Done, Rocket } from "../../../public/lottie/";

const DevInfo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container  transparent>
      <div className="p-16 w-full flex flex-wrap justify-evenly gap-4">
        <div className="flex flex-col items-center gap-1">
          <Lottie className="h-36 w-36" animationData={Coffee} {...defaultOptions} />
          <p className="text-lg font-bold text-slate-100">Drunk coffees</p>
          <CountUp className="flex-1" value={10000000} duration={100000} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Lottie className="h-36 w-36" animationData={Done} {...defaultOptions} />
          <p className="text-lg font-bold text-slate-100">Finished projects</p>
          <CountUp className="flex-1" value={43} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Lottie className="h-36 w-36" animationData={Rocket} {...defaultOptions} />
          <p className="text-lg font-bold text-slate-100">Ongoing projects</p>
          <CountUp className="flex-1" value={4} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Lottie className="h-36 w-36" animationData={Client} {...defaultOptions} />
          <p className="text-lg font-bold text-slate-100">Clients</p>
          <CountUp className="flex-1" value={22} />
        </div>
      </div>
    </Container>
  );
};

export default DevInfo;
