import { useNavigate } from "react-router-dom";
import clsx from "clsx";

function FinishingUp(props: {
  isToggled: boolean;
  selectedPlan: number;
  setSelectedPlan: (status: number) => void;
  onlineService: boolean;
  setOnlineService: (status: boolean) => void;
  largerStorage: boolean;
  setLargerStorage: (status: boolean) => void;
  customizableProfile: boolean;
  setCustomizableProfile: (status: boolean) => void;
}) {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.removeItem("formData");
    navigate("/finish");
  };

  const calculateTotal = () => {
    let total = 0;

    if (props.selectedPlan === 1) {
      total += props.isToggled ? 90 : 9;
    }
    if (props.selectedPlan === 2) {
      total += props.isToggled ? 120 : 12;
    }
    if (props.selectedPlan === 3) {
      total += props.isToggled ? 150 : 15;
    }
    if (props.onlineService) {
      total += props.isToggled ? 10 : 1;
    }
    if (props.largerStorage) {
      total += props.isToggled ? 20 : 2;
    }
    if (props.customizableProfile) {
      total += props.isToggled ? 20 : 2;
    }

    return total;
  };

  return (
    <div className="flex justify-center">
      <div className="px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[24rem] translate-y-[-7rem]">
        <div className="mb-[1.4rem] max-w-[16rem]">
          <h1 className="text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
            Finishing up
          </h1>
          <span className="text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
            Double-check everything looks OK before confirming.
          </span>
        </div>
        <div className="p-[1rem] bg-[#F8F9FF] rounded-md">
          <div className="flex items-center justify-between gap-[1rem]">
            <div>
              <div className="flex gap-[0.2rem]">
                <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                  {clsx(
                    props.selectedPlan === 1 && "Arcade",
                    props.selectedPlan === 2 && "Advanced",
                    props.selectedPlan === 3 && "Pro"
                  )}
                </h2>
                <h2 className="text-[1rem] leading-[1.2rem] font-[500] text-[#022959]">
                  {clsx(props.isToggled ? "(Yearly)" : "(Monthly)")}
                </h2>
              </div>
              <h3
                onClick={() => {
                  navigate("/select-plan");
                }}
                className="text-[0.9rem] leading-[1.2rem] font-[400] w-max text-[#9699AA] underline cursor-pointer"
              >
                Change
              </h3>
            </div>
            <span className="text-[0.9rem] leading-[1.3rem] font-[700]  text-[#022959]">
              {clsx(
                props.selectedPlan === 1 && props.isToggled && "$90/yr",
                props.selectedPlan === 1 && !props.isToggled && "$9/mo",
                props.selectedPlan === 2 && props.isToggled && "$120/yr",
                props.selectedPlan === 2 && !props.isToggled && "$12/mo",
                props.selectedPlan === 3 && props.isToggled && "$150/yr",
                props.selectedPlan === 3 && !props.isToggled && "$15/mo"
              )}
            </span>
          </div>
          <span className="flex w-full h-[0.07rem] bg-[#9699AA] mt-[0.8rem] mb-[0.8rem] opacity-[20%]"></span>
          <div>
            {props.onlineService && (
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
                  {props.isToggled ? "+$10/yr" : "+$1/mo"}
                </span>
              </div>
            )}
            {props.largerStorage && (
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
                  {props.isToggled ? "+$20/yr" : "+$2/mo"}
                </span>
              </div>
            )}
            {props.customizableProfile && (
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
                  {props.isToggled ? "+$20/yr" : "+$2/mo"}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-[1rem] p-[1rem]">
          <h3 className="text-[0.9rem] leading-[1.2rem] font-[400] text-[#9699AA]">
            Total {props.isToggled ? "(Yearly)" : "(Monthly)"}
          </h3>
          <span className="text-[1rem] leading-[1.3rem] font-[700]  text-[#483EFF]">
            ${calculateTotal()}
            {props.isToggled ? "/yr" : "/mo"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 p-[1rem] bg-[#FFF]">
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
          className="text-[1rem] leading-[1rem] font-[500] text-[#FFF]  px-[1rem] py-[0.8rem] bg-[#483EFF] rounded-md outline-none"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
export default FinishingUp;
