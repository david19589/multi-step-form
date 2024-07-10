import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Header from "../header";
import { motion } from "framer-motion";
import { useStateContext } from '../../utils/use-state-context';

function FinishingUp() {
  const {
    isToggled,
    setIsToggled,
    selectedPlan,
    setSelectedPlan,
    onlineService,
    setOnlineService,
    largerStorage,
    setLargerStorage,
    customizableProfile,
    setCustomizableProfile,
  } = useStateContext();
  
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.removeItem("formData");
    setIsToggled(false);
    setSelectedPlan(1);
    setOnlineService(false);
    setLargerStorage(false);
    setCustomizableProfile(false);
    navigate("/finish");
  };

  const calculateTotal = () => {
    let total = 0;

    if (selectedPlan === 1) {
      total += isToggled ? 90 : 9;
    }
    if (selectedPlan === 2) {
      total += isToggled ? 120 : 12;
    }
    if (selectedPlan === 3) {
      total += isToggled ? 150 : 15;
    }
    if (onlineService) {
      total += isToggled ? 10 : 1;
    }
    if (largerStorage) {
      total += isToggled ? 20 : 2;
    }
    if (customizableProfile) {
      total += isToggled ? 20 : 2;
    }

    return total;
  };

  return (
    <div className="lg:items-center min-h-[100vh] relative flex justify-center">
      <div className="lg:translate-y-0 lg:p-[1rem] lg:flex lg:justify-between lg:max-w-[60rem] lg:h-[38rem] px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[24rem] h-max translate-y-[7rem]">
        <div className="lg:flex hidden">
          <Header />
        </div>
        <div className="lg:w-[35.4rem] lg:pr-[6rem] lg:pt-[3.5rem]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="lg:max-w-[28rem] mb-[1.4rem] max-w-[16rem]">
              <h1 className="lg:text-[2rem] lg:leading-[2.2rem] text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
                Finishing up
              </h1>
              <span className="lg:text-[1rem] lg:leading-[1.5rem] lg:mb-[2rem] text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
                Double-check everything looks OK before confirming.
              </span>
            </div>
            <div className="p-[1rem] bg-[#F8F9FF] rounded-md">
              <div className="flex items-center justify-between gap-[1rem]">
                <div>
                  <div className="flex gap-[0.2rem]">
                    <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                      {clsx(
                        selectedPlan === 1 && "Arcade",
                        selectedPlan === 2 && "Advanced",
                        selectedPlan === 3 && "Pro"
                      )}
                    </h2>
                    <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                      {clsx(isToggled ? "(Yearly)" : "(Monthly)")}
                    </h2>
                  </div>
                  <h3
                    onClick={() => {
                      navigate("/select-plan");
                    }}
                    className="text-[0.9rem] leading-[1.2rem] font-[400] w-max text-[#9699AA] hover:text-[#483EFF] underline cursor-pointer"
                  >
                    Change
                  </h3>
                </div>
                <span className="text-[0.9rem] leading-[1.3rem] font-[700]  text-[#022959]">
                  {clsx(
                    selectedPlan === 1 && isToggled && "$90/yr",
                    selectedPlan === 1 && !isToggled && "$9/mo",
                    selectedPlan === 2 && isToggled && "$120/yr",
                    selectedPlan === 2 && !isToggled && "$12/mo",
                    selectedPlan === 3 && isToggled && "$150/yr",
                    selectedPlan === 3 && !isToggled && "$15/mo"
                  )}
                </span>
              </div>
              <span className="flex w-full h-[0.07rem] bg-[#9699AA] mt-[0.8rem] mb-[0.8rem] opacity-[20%]"></span>
              <div>
                {onlineService && (
                  <div className="flex items-center justify-between gap-[1rem] mb-[0.6rem]">
                    <h3
                      onClick={() => {
                        navigate("/select-plan");
                      }}
                      className="text-[0.9rem] leading-[1.2rem] font-[400] text-[#9699AA]"
                    >
                      Online service
                    </h3>
                    <span className="text-[0.9rem] leading-[1.3rem] font-[500]  text-[#022959]">
                      {isToggled ? "+$10/yr" : "+$1/mo"}
                    </span>
                  </div>
                )}
                {largerStorage && (
                  <div className="flex items-center justify-between gap-[1rem] mb-[0.6rem]">
                    <h3
                      onClick={() => {
                        navigate("/select-plan");
                      }}
                      className="text-[0.9rem] leading-[1.2rem] font-[400] text-[#9699AA]"
                    >
                      Larger storage
                    </h3>
                    <span className="text-[0.9rem] leading-[1.3rem] font-[500]  text-[#022959]">
                      {isToggled ? "+$20/yr" : "+$2/mo"}
                    </span>
                  </div>
                )}
                {customizableProfile && (
                  <div className="flex items-center justify-between gap-[1rem]">
                    <h3
                      onClick={() => {
                        navigate("/select-plan");
                      }}
                      className="text-[0.9rem] leading-[1.2rem] font-[400] text-[#9699AA]"
                    >
                      Customizable profile
                    </h3>
                    <span className="text-[0.9rem] leading-[1.3rem] font-[500]  text-[#022959]">
                      {isToggled ? "+$20/yr" : "+$2/mo"}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between gap-[1rem] p-[1rem]">
              <h3 className="text-[0.9rem] leading-[1.2rem] font-[400] text-[#9699AA]">
                Total {isToggled ? "(Yearly)" : "(Monthly)"}
              </h3>
              <span className="text-[1rem] leading-[1.3rem] font-[700]  text-[#483EFF]">
                ${calculateTotal()}
                {isToggled ? "/yr" : "/mo"}
              </span>
            </div>
          </motion.div>
          <div className="lg:flex hidden items-center gap-[19.8rem] absolute bottom-0 py-[2rem]">
            <h3
              onClick={() => {
                navigate("/pick-add-ons");
              }}
              className="text-[1rem] leading-[1rem] font-[500] text-[#9699AA] hover:text-[#022959] cursor-pointer transition-all duration-200"
            >
              Go Back
            </h3>
            <button
              onClick={onSubmit}
              className="text-[1rem] leading-[1.2rem] font-[500] text-[#FFF] px-[1rem] py-[0.8rem] bg-[#483EFF] hover:bg-[#928CFF] rounded-md outline-none transition-all duration-200"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-between absolute bottom-0 left-0 right-0 p-[1rem] bg-[#FFF]">
        <h3
          onClick={() => {
            navigate("/pick-add-ons");
          }}
          className="text-[1rem] leading-[1rem] font-[500] text-[#9699AA] cursor-pointer"
        >
          Go Back
        </h3>
        <button
          onClick={onSubmit}
          className="text-[1rem] leading-[1rem] font-[500] text-[#FFF] px-[1rem] py-[0.8rem] bg-[#483EFF] hover:bg-[#164A8A] rounded-md outline-none transition-all duration-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
export default FinishingUp;
