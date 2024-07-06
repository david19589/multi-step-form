function Toggle(props: {
  isToggled: boolean;
  setIsToggled: (status: boolean) => void;
}) {
  return (
    <div className="flex">
      <label className="inline-flex items-center mx-[10px] cursor-pointer">
        <input
          onClick={() => {
            props.setIsToggled(!props.isToggled);
          }}
          type="checkbox"
          id="checkbox"
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#022959] color-[#FFF] rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[0.25rem] after:start-[0.4rem] after:bg-[#FFF] after:rounded-full after:h-[1rem] after:w-[1rem] after:transition-all"></div>
      </label>
    </div>
  );
}
export default Toggle;
