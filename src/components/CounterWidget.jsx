import CounterLabel from "./CounterLabel";
import CounterNumber from "./CounterNumber";

//icons
import decreaseIcon from "../assets/decrease.svg";
import increaseicon from "../assets/increase.svg";

function CounterWidget({
  children,
  value,
  size,
  type,
  decrease = false,
  icon,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-20">
      <img src={icon} />
      <CounterLabel>Total Operations</CounterLabel>
      <CounterNumber size={size}>{value}</CounterNumber>
      <CounterLabel type={type}>
        <img src={decrease == true ? decreaseIcon : increaseicon} alt="" />
        Operations 2023
      </CounterLabel>
    </div>
  );
}

export default CounterWidget;
