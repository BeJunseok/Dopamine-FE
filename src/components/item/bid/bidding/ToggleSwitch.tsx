import clsx from "clsx";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return (
    <button
      type="button"
      role="switch"
      onClick={() => onChange(!checked)}
      aria-checked={checked}
      aria-label="경매중인 상품만 보기"
      className={clsx(
        "relative inline-flex w-11 h-6 items-center rounded-full transition-colors duration-300 cursor-pointer outline-none",
        checked ? "bg-mainpink" : "bg-grey06"
      )}
    >
      <span
        className={clsx(
          "inline-block w-4 h-4 transform rounded-full bg-white transition-transform duration-300",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
};

export default ToggleSwitch;
