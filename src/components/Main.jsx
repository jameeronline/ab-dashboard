import { useState, useEffect } from "react";
import SlotCounter from "react-slot-counter";
import ScaleLoader from "react-spinners/ScaleLoader";

//utilitie
import cn from "../utilities/cn";

//Support components
import CounterNumber from "./CounterNumber";
import CounterLabel from "./CounterLabel";
import ButtonRounded from "./Button";
import CounterWidget from "./CounterWidget";
import TabContent from "./TabContent";

//react query
import { useAbsherData } from "../api/queries";

function Main() {
  const [tabState, setTabState] = useState(1);

  const { data, isError, isPending, error } = useAbsherData();

  const handleTab = (id) => {
    setTabState(id);
  };

  if (isPending) {
    return (
      <main className="lg:container mx-auto px-4 -mt-6 md:-mt-12 z-10 relative">
        <div className="bg-white rounded-2xl shadow-lg px-4 py-6 mb-0 md:p-12">
          <div className="flex flex-col justify-center items-center">
            <ScaleLoader color="#00663D" />
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="lg:container mx-auto px-4 -mt-6 md:-mt-12 z-10 relative">
      <div className="bg-white rounded-2xl shadow-lg px-4 py-6 mb-6 md:p-12">
        <div className="flex flex-col justify-center items-center gap-4 mb-10 lg:mb-20">
          <CounterWidget className="gap-2 md:gap-4">
            <CounterLabel>إجمالي العمليات</CounterLabel>
            <div
              className={cn(
                "font-bold inline-flex gap-2 items-baseline",
                "text-4xl md:text-7xl",
                "text-secondary"
              )}
              dir="ltr"
            >
              <SlotCounter value={data?.totalOps} />
            </div>
            <CounterLabel>عملية في سنة 2023</CounterLabel>
          </CounterWidget>
        </div>

        <div className="flex justify-center items-center gap-2 mb-8 md:mb-14">
          <ButtonRounded active={tabState === 1} onClick={() => handleTab(1)}>
            2023
          </ButtonRounded>
          <ButtonRounded active={tabState === 2} onClick={() => handleTab(2)}>
            2022
          </ButtonRounded>
          <ButtonRounded active={tabState === 3} onClick={() => handleTab(3)}>
            2021
          </ButtonRounded>
          <ButtonRounded active={tabState === 4} onClick={() => handleTab(4)}>
            2020
          </ButtonRounded>
        </div>

        {/* tab content */}
        <TabContent
          className={tabState == 1 ? null : "hidden"}
          data={data["yearlyData"][0]}
        />
        <TabContent
          className={tabState == 2 ? null : "hidden"}
          data={data["yearlyData"][1]}
        />
        <TabContent
          className={tabState == 3 ? null : "hidden"}
          data={data["yearlyData"][2]}
        />
        <TabContent
          className={tabState == 4 ? null : "hidden"}
          data={data["yearlyData"][3]}
        />

        <p className="text-xs text-center text-accent mb-4 lg:mb-0">
          * Growth statistics compared to 2022
        </p>
      </div>
    </main>
  );
}

export default Main;
