import { motion } from "framer-motion";
import Header from "../header";
import CheckSvg from "/src/assets/icon-thank-you.svg";

function Finish() {
  return (
    <div className="lg:items-center flex justify-center">
      <div className="lg:translate-y-0 lg:p-[1rem] lg:flex lg:justify-between lg:max-w-[60rem] lg:h-[38rem] px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[24rem] translate-y-[7rem]">
        <div className="lg:flex hidden">
          <Header />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="lg:w-[35.4rem] lg:pr-[6rem] lg:pt-[3.5rem] flex justify-center">
            <div className="lg:max-w-[28rem] flex flex-col justify-center items-center mb-[1.4rem] max-w-[16rem] ">
              <img
                className="w-[5rem] mb-[1.5rem]"
                src={CheckSvg}
                alt="CheckSvg"
              />
              <h1 className="lg:text-[2rem] lg:leading-[2.2rem] text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
                Thank you!
              </h1>
              <span className="lg:text-[1rem] lg:leading-[1.5rem] lg:mb-[2rem] text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA] text-center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Finish;
