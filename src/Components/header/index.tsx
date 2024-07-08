import clsx from "clsx";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <div className="lg:rounded-lg lg:w-[17rem] lg:mb-0 lg:flex-col lg:justify-start lg:relative lg:p-[2rem] lg:gap-[2rem] flex justify-center gap-[1rem] mb-[2rem] pt-[2rem] pb-[8rem] absolute top-0 left-0 right-0 lg:bg-[url('/src/assets/bg-sidebar-desktop.svg')] bg-[url('/src/assets/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
      <div className="lg:flex lg:items-center lg:gap-[1rem]">
        <span
          className={clsx(
            currentLocation === "/"
              ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
              : "text-[#FFF] border-[#FFF]",
            "px-[0.9rem] py-[0.6rem] w-max  border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
          )}
        >
          1
        </span>
        <div className="lg:flex lg:flex-col hidden">
          <h3 className="text-[0.8rem] leading-[0.9rem] font-[400] text-[#ABBCFF] mb-[0.3rem]">
            STEP 1
          </h3>
          <h2 className="text-[0.9rem] leading-[1rem] font-[700] text-[#FFF]">
            YOUR INFO
          </h2>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:gap-[1rem]">
        <span
          className={clsx(
            currentLocation === "/select-plan"
              ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
              : "text-[#FFF] border-[#FFF]",
            "px-[0.9rem] py-[0.6rem] w-max border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
          )}
        >
          2
        </span>
        <div className="lg:flex lg:flex-col hidden">
          <h3 className="text-[0.8rem] leading-[0.9rem] font-[400] text-[#ABBCFF] mb-[0.3rem]">
            STEP 2
          </h3>
          <h2 className="text-[0.9rem] leading-[1rem] font-[700] text-[#FFF]">
            SELECT PLAN
          </h2>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:gap-[1rem]">
        <span
          className={clsx(
            currentLocation === "/pick-add-ons"
              ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
              : "text-[#FFF] border-[#FFF]",
            "px-[0.9rem] py-[0.6rem] w-max border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
          )}
        >
          3
        </span>
        <div className="lg:flex lg:flex-col hidden">
          <h3 className="text-[0.8rem] leading-[0.9rem] font-[400] text-[#ABBCFF] mb-[0.3rem]">
            STEP 3
          </h3>
          <h2 className="text-[0.9rem] leading-[1rem] font-[700] text-[#FFF]">
            ADD-ONS
          </h2>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:gap-[1rem]">
        <span
          className={clsx(
            currentLocation === "/finishing-up" || currentLocation === "/finish"
              ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
              : "text-[#FFF] border-[#FFF]",
            "px-[0.9rem] py-[0.6rem] w-max border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
          )}
        >
          4
        </span>
        <div className="lg:flex lg:flex-col hidden">
          <h3 className="text-[0.8rem] leading-[0.9rem] font-[400] text-[#ABBCFF] mb-[0.3rem]">
            STEP 4
          </h3>
          <h2 className="text-[0.9rem] leading-[1rem] font-[700] text-[#FFF]">
            SUMMARY
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Header;
