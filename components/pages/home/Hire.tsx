import Spline from "@splinetool/react-spline";

import style from "./hire.module.scss";

const Hire = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div className="flex flex-col gap-4 p-10">
        <p className="text-lg font-bold text-slate-100">
          {" "}
          I would like to work with you 💓
        </p>
        <a
          target="_blank"
          href="https://pouryanoufallah.typeform.com/to/B9MPjd6H"
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded bg-slate-100 hover:bg-slate-100 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-indigo-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-center text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-slate-100">
            Lets Connect 🎈
          </span>
        </a>
      </div>
      <div>
        <Spline
          about="This is a 3D model of the earth."
          className={style.earth}
          scene="https://prod.spline.design/t2vO2Bs0b9wzAg9X/scene.splinecode"
        ></Spline>
      </div>
    </div>
  );
};

export default Hire;
