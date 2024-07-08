import arcadeSvg from "/src/assets/icon-arcade.svg";
import advancedSvg from "/src/assets/icon-advanced.svg";
import proSvg from "/src/assets/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Toggle from "../toggle";
import Header from "../header";
import { motion } from "framer-motion";

function SelectPlan(props: {
  isToggled: boolean;
  setIsToggled: (status: boolean) => void;
  selectedPlan: number;
  setSelectedPlan: (status: number) => void;
}) {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/pick-add-ons");
  };

  return (
    <div className="lg:items-center lg:h-[100vh] flex justify-center">
      <div className="lg:translate-y-0 lg:p-[1rem] lg:flex lg:justify-between lg:max-w-[60rem] lg:h-[38rem] px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[23rem] translate-y-[7rem]">
        <div className="lg:flex hidden">
          <Header />
        </div>
        <div className="lg:pr-[6rem] lg:pt-[3.5rem]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="lg:max-w-[28rem] mb-[1.4rem] max-w-[16rem]">
              <h1 className="lg:text-[2rem] lg:leading-[2.2rem] text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
                Select your plan
              </h1>
              <span className="lg:text-[1rem] lg:leading-[1.5rem] lg:mb-[2rem] text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
                You have the option of monthly or yearly billing.
              </span>
            </div>
            <div className="lg:flex lg:gap-[1.2rem] mb-[1.5rem]">
              <div
                onClick={() => {
                  props.setSelectedPlan(1);
                }}
                className={clsx(
                  props.selectedPlan === 1
                    ? "border-[#483EFF] bg-[#F8F9FF]"
                    : "border-[#D6D9E6]",
                  "lg:flex-col lg:w-[9rem] flex gap-[1rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
                )}
              >
                <img
                  className="lg:mb-[2rem] lg:w-max"
                  src={arcadeSvg}
                  alt="arcadeSvg"
                />
                <div>
                  <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                    Arcade
                  </h2>
                  <span className="text-[0.9rem] leading-[1.3rem] font-[400] text-[#9699AA]">
                    {props.isToggled ? "$90/yr" : "$9/mo"}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  props.setSelectedPlan(2);
                }}
                className={clsx(
                  props.selectedPlan === 2
                    ? "border-[#483EFF] bg-[#F8F9FF]"
                    : "border-[#D6D9E6]",
                  "lg:flex-col lg:w-[9rem] flex gap-[1rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
                )}
              >
                <img
                  className="lg:mb-[2rem] lg:w-max"
                  src={advancedSvg}
                  alt="advancedSvg"
                />
                <div>
                  <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                    Advanced
                  </h2>
                  <span className="text-[0.9rem] leading-[1.3rem] font-[400] text-[#9699AA]">
                    {props.isToggled ? "$120/yr" : "$12/mo"}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  props.setSelectedPlan(3);
                }}
                className={clsx(
                  props.selectedPlan === 3
                    ? "border-[#483EFF] bg-[#F8F9FF]"
                    : "border-[#D6D9E6]",
                  "lg:flex-col lg:w-[9rem] lg:mb-[0.8rem] flex gap-[1rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer transition-all duration-200 hover:border-[#483EFF]"
                )}
              >
                <img
                  className="lg:mb-[2rem] lg:w-max"
                  src={proSvg}
                  alt="proSvg"
                />
                <div>
                  <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                    Pro
                  </h2>
                  <span className="text-[0.9rem] leading-[1.3rem] font-[400] text-[#9699AA]">
                    {props.isToggled ? "$150/yr" : "$15/mo"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-[0.9rem] bg-[#F8F9FF] rounded-xl">
              <h2
                className={clsx(
                  props.isToggled ? "text-[#9699AA]" : "text-[#022959]",
                  "text-[0.9rem] leading-[1rem] font-[500]"
                )}
              >
                Monthly
              </h2>
              <Toggle
                isToggled={props.isToggled}
                setIsToggled={props.setIsToggled}
              />
              <h2
                className={clsx(
                  props.isToggled ? "text-[#022959]" : "text-[#9699AA]",
                  "text-[0.9rem] leading-[1rem] font-[500]"
                )}
              >
                Yearly
              </h2>
            </div>
          </motion.div>
          <div className="lg:flex hidden items-center gap-[18.5rem] absolute bottom-0 py-[2rem]">
            <h3
              onClick={() => {
                navigate("/");
              }}
              className="text-[1rem] leading-[1rem] font-[500] text-[#9699AA] hover:text-[#022959] cursor-pointer transition-all duration-200"
            >
              Go Back
            </h3>
            <button
              onClick={onSubmit}
              className="text-[1rem] leading-[1.2rem] font-[500] text-[#FFF] px-[1rem] py-[0.8rem] bg-[#022959] hover:bg-[#164A8A] rounded-md outline-none transition-all duration-200"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-between absolute bottom-0 left-0 right-0 p-[1rem] bg-[#FFF]">
        <h3
          onClick={() => {
            navigate("/");
          }}
          className="text-[1rem] leading-[1rem] font-[500] text-[#9699AA] cursor-pointer"
        >
          Go Back
        </h3>
        <button
          onClick={onSubmit}
          className="text-[1rem] leading-[1rem] font-[500] text-[#FFF] px-[1rem] py-[0.8rem] bg-[#022959] hover:bg-[#164A8A] rounded-md outline-none transition-all duration-200"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
export default SelectPlan;
