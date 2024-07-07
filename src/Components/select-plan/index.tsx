import arcadeSvg from "/src/assets/icon-arcade.svg";
import advancedSvg from "/src/assets/icon-advanced.svg";
import proSvg from "/src/assets/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Toggle from "../toggle";

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
    <div className="flex justify-center">
      <div className="px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[23rem] translate-y-[-7rem]">
        <div className="mb-[1.4rem] max-w-[16rem]">
          <h1 className="text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
            Select your plan
          </h1>
          <span className="text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
            You have the option of monthly or yearly billing.
          </span>
        </div>
        <div className="mb-[1.5rem]">
          <div
            onClick={() => {
              props.setSelectedPlan(1);
            }}
            className={clsx(
              props.selectedPlan === 1
                ? "border-[#483EFF] bg-[#F8F9FF]"
                : "border-[#D6D9E6]",
              "flex gap-[1rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
            )}
          >
            <img src={arcadeSvg} alt="arcadeSvg" />
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
              "flex gap-[1rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
            )}
          >
            <img src={advancedSvg} alt="advancedSvg" />
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
              "flex gap-[1rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer transition-all duration-200 hover:border-[#483EFF]"
            )}
          >
            <img src={proSvg} alt="proSvg" />
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
      </div>
      <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 p-[1rem] bg-[#FFF]">
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
          className="text-[1rem] leading-[1rem] font-[500] text-[#FFF]  px-[1rem] py-[0.8rem] bg-[#022959] rounded-md outline-none"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
export default SelectPlan;
