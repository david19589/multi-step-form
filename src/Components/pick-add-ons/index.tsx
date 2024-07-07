import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Header from "../header";
import { motion } from "framer-motion";

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
    if (
      props.onlineService ||
      props.largerStorage ||
      props.customizableProfile
    ) {
      navigate("/finishing-up");
    }
  };

  return (
    <div className="lg:items-center lg:h-[100vh] flex justify-center">
      <div className="lg:translate-y-0 lg:p-[1rem] lg:flex lg:justify-between lg:max-w-[60rem] lg:h-[38rem] px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[24rem] translate-y-[-7rem]">
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
                Pick add-ons
              </h1>
              <span className="lg:text-[1rem] lg:leading-[1.5rem] lg:mb-[2rem] text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
                Add-ons help enhance your gaming experience.
              </span>
            </div>
            <div>
              <label
                htmlFor="custom-checkbox"
                className={clsx(
                  props.onlineService && "border-[#483EFF] bg-[#F8F9FF]",
                  "lg:gap-[10.4rem] flex items-center justify-between gap-[0.2rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
                )}
              >
                <div className="flex items-center gap-[1rem]">
                  <input
                    className="rounded-xl w-[1.5rem] h-[1.5rem] cursor-pointer"
                    id="custom-checkbox"
                    type="checkbox"
                    checked={props.onlineService}
                    onChange={() =>
                      props.setOnlineService(!props.onlineService)
                    }
                  />
                  <div>
                    <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                      Online service
                    </h2>
                    <span className="text-[0.9rem] leading-[1.3rem] font-[400] text-[#9699AA]">
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
                  "lg:gap-[10.4rem] flex items-center justify-between gap-[0.2rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
                )}
              >
                <div className="flex items-center gap-[1rem]">
                  <input
                    className="rounded-xl w-[1.5rem] h-[1.5rem] cursor-pointer"
                    id="custom-checkbox2"
                    type="checkbox"
                    checked={props.largerStorage}
                    onChange={() =>
                      props.setLargerStorage(!props.largerStorage)
                    }
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
                  "lg:gap-[10.4rem] flex items-center justify-between gap-[0.2rem] px-[1rem] py-[1rem] border-[0.08rem] rounded-xl cursor-pointer mb-[0.8rem] transition-all duration-200 hover:border-[#483EFF]"
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
          </motion.div>
          <div className="lg:flex hidden items-center gap-[18.5rem] absolute bottom-0 py-[2rem]">
            <h3
              onClick={() => {
                navigate("/select-plan");
              }}
              className="text-[1rem] leading-[1rem] font-[500] text-[#9699AA] hover:text-[#022959]  cursor-pointer transition-all duration-200"
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
            navigate("/select-plan");
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
export default PickAddOns;
