import { useNavigate } from "react-router-dom";
import clsx from "clsx";

function PickAddOns(props: {
  isToggled: boolean;
  onlineService: boolean;
  setOnlineService: (status: boolean) => void;
  largerStorage: boolean;
  setLargerStorage: (status: boolean) => void;
  customizableProfile: boolean;
  setCustomizableProfile: (status: boolean) => void;
}) {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/finishing-up");
  };

  return (
    <div className="flex justify-center">
      <div className="px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[24rem] translate-y-[-7rem]">
        <div className="mb-[1.4rem] max-w-[16rem]">
          <h1 className="text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
            Pick add-ons
          </h1>
          <span className="text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
            Add-ons help enhance your gaming experience.
          </span>
        </div>
        <div>
          <label
            htmlFor="custom-checkbox"
            className={clsx(
              props.onlineService && "border-[#483EFF] bg-[#F8F9FF]",
              "flex items-center justify-between gap-[0.2rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
            )}
          >
            <div className="flex items-center gap-[1rem]">
              <input
                className="rounded-xl w-[1.5rem] h-[1.5rem] cursor-pointer"
                id="custom-checkbox"
                type="checkbox"
                checked={props.onlineService}
                onChange={() => props.setOnlineService(!props.onlineService)}
              />
              <div>
                <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                  Online service
                </h2>
                <span className="text-[0.9rem] leading-[1.3rem] font-[400]  text-[#9699AA]">
                  Access to multiplayer games
                </span>
              </div>
            </div>
            <span className="text-[0.8rem] leading-[1.3rem] font-[400] text-[#483EFF]">
              {props.isToggled ? "+$10/yr" : "+$1/mo"}
            </span>
          </label>
          <label
            htmlFor="custom-checkbox2"
            className={clsx(
              props.largerStorage && "border-[#483EFF] bg-[#F8F9FF]",
              "flex items-center justify-between gap-[0.2rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
            )}
          >
            <div className="flex items-center gap-[1rem]">
              <input
                className="rounded-xl w-[1.5rem] h-[1.5rem] cursor-pointer"
                id="custom-checkbox2"
                type="checkbox"
                checked={props.largerStorage}
                onChange={() => props.setLargerStorage(!props.largerStorage)}
              />
              <div>
                <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                  Larger storage
                </h2>
                <span className="text-[0.8rem] leading-[1.3rem] font-[400] text-[#9699AA]">
                  Extra 1TB of cloud save
                </span>
              </div>
            </div>
            <span className="text-[0.9rem] leading-[1.3rem] font-[400] text-[#483EFF]">
              {props.isToggled ? "+$20/yr" : "+$2/mo"}
            </span>
          </label>
          <label
            htmlFor="custom-checkbox3"
            className={clsx(
              props.customizableProfile && "border-[#483EFF] bg-[#F8F9FF]",
              "flex items-center justify-between gap-[0.2rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
            )}
          >
            <div className="flex items-center gap-[1rem]">
              <input
                className="rounded-xl w-[1.5rem] h-[1.5rem] cursor-pointer"
                id="custom-checkbox3"
                type="checkbox"
                checked={props.customizableProfile}
                onChange={() =>
                  props.setCustomizableProfile(!props.customizableProfile)
                }
              />
              <div>
                <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                  Customizable profile
                </h2>
                <span className="text-[0.8rem] leading-[1.3rem] font-[400] text-[#9699AA]">
                  Custom theme on your profile
                </span>
              </div>
            </div>
            <span className="text-[0.9rem] leading-[1.3rem] font-[400] text-[#483EFF]">
              {props.isToggled ? "+$20/yr" : "+$2/mo"}
            </span>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 p-[1rem] bg-[#FFF]">
        <h3
          onClick={() => {
            navigate("/select-plan");
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
export default PickAddOns;
