import SlotCounter from "react-slot-counter";

//Support components
import CounterNumber from "./CounterNumber";
import CounterLabel from "./CounterLabel";
import ButtonRounded from "./Button";
import CounterWidget from "./CounterWidget";

// Images
import code from "../assets/code.svg";
import decrease from "../assets/decrease.svg";
import filecheck from "../assets/file-check.svg";
import file from "../assets/file.svg";
import headphone from "../assets/headphones.svg";
import increase from "../assets/increase.svg";
import phone from "../assets/phone.svg";
import user from "../assets/user-square.svg";

function Main() {
  return (
    <main className="lg:container mx-auto px-4 -mt-4 md:-mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
        <div className="flex flex-col justify-center items-center gap-4 mb-20">
          {/* <SlotCounter value={221619087} charClassName="font-bold text-7xl" /> */}
          <CounterLabel>Total Operations</CounterLabel>
          <CounterNumber size="lg">221,619,087</CounterNumber>
          <CounterLabel>Operations 2023</CounterLabel>
        </div>

        <div className="flex justify-center items-center gap-3 mb-14">
          <ButtonRounded>2020</ButtonRounded>
          <ButtonRounded>2021</ButtonRounded>
          <ButtonRounded>2022</ButtonRounded>
          <ButtonRounded>2023</ButtonRounded>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CounterWidget
            value="41.9+"
            type="primary"
            icon={code}
            decrease={false}
          />
          <CounterWidget
            value="22.6+"
            type="primary"
            icon={filecheck}
            decrease={false}
          />
          <CounterWidget
            value="17.5+"
            type="primary"
            icon={filecheck}
            decrease={false}
          />
          <CounterWidget
            value="24+"
            type="primary"
            icon={phone}
            decrease={false}
          />
          <CounterWidget
            value="1.1%"
            type="primary"
            icon={headphone}
            decrease={true}
          />
          <CounterWidget
            value="179.6+"
            type="primary"
            icon={headphone}
            decrease={false}
          />
        </div>

        <p className="text-sm text-center text-accent">
          * Growth statistics compared to 2022
        </p>
      </div>
    </main>
  );
}

export default Main;
