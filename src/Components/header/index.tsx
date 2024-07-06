import clsx from "clsx";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currenLocation = location.pathname;

  return (
    <div className="flex justify-center gap-[1rem] mb-[2rem] pt-[2rem] pb-[8rem] bg-[url('/src/assets/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
      <span
        className={clsx(
          currenLocation === "/"
            ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
            : "text-[#FFF] border-[#FFF]",
          "px-[0.8rem] py-[0.6rem]  border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
        )}
      >
        1
      </span>
      <span
        className={clsx(
          currenLocation === "/select-plan"
            ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
            : "text-[#FFF] border-[#FFF]",
          "px-[0.8rem] py-[0.6rem]  border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
        )}
      >
        2
      </span>
      <span
        className={clsx(
          currenLocation === "/pick-add-ons"
            ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
            : "text-[#FFF] border-[#FFF]",
          "px-[0.8rem] py-[0.6rem]  border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
        )}
      >
        3
      </span>
      <span
        className={clsx(
          currenLocation === "/finishing-up"
            ? "text-[#022959] bg-[#BEE2FD] border-[#BEE2FD]"
            : "text-[#FFF] border-[#FFF]",
          "px-[0.8rem] py-[0.6rem]  border-[0.065rem] rounded-full text-[1rem] leading-[1rem] font-[700]"
        )}
      >
        4
      </span>
    </div>
  );
}
export default Header;
