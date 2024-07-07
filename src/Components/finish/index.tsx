import CheckSvg from "/src/assets/icon-thank-you.svg";

function Finish() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center px-[1.5rem] py-[2rem] mb-[1.4rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[24rem] translate-y-[-7rem]">
        <img
          className="max-w-[3rem] mb-[1.5rem]"
          src={CheckSvg}
          alt="CheckSvg"
        />
        <h1 className="text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
          Thank you!
        </h1>
        <span className="text-[1rem] max-w-[19rem] leading-[1.5rem] font-[400] text-[#9699AA] text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform.
        </span>
      </div>
    </div>
  );
}
export default Finish;
