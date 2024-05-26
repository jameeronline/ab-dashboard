import cn from "../utilities/cn";
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
import Icon from "./Icon";

function TabContent({ className, data, ...props }) {
  const reportData = data;
  const autoProcess = reportData["autoProcesses"];
  const totalOps = reportData["totalOps"];
  const otherOps = reportData["otherOps"];
  const absherDownloads = reportData["absherDownloads"];
  const techSupportNeed = reportData["techSupportNeed"];
  const totalDigitalIds = reportData["totalDigitalIds"];

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-8 gap-y-14 md:grid-cols-3 md:gap-y-14 mb-10 md:mb-12",
        className
      )}
      {...props}
    >
      <CounterWidget>
        <Icon src={code} />
        <CounterLabel className="text-xs">العمليات المؤتمتة </CounterLabel>
        <CounterNumber>
          <span dir="ltr">{autoProcess.value}</span>
          <span className="text-xl md:text-3xl">م</span>
        </CounterNumber>
        <CounterLabel
          type="primary"
          className={!autoProcess.increased ? "text-red-500" : null}
        >
          {autoProcess.update}
          {autoProcess.increased ? (
            <Icon src={increase} />
          ) : (
            <Icon src={decrease} />
          )}
        </CounterLabel>
      </CounterWidget>

      <CounterWidget>
        <Icon src={filecheck} />
        <CounterLabel className="text-xs">إجمالي العمليات</CounterLabel>
        <CounterNumber>
          <span dir="ltr">{totalOps.value}</span>
          <span className="text-xl md:text-3xl">م</span>
        </CounterNumber>
        <CounterLabel
          type="primary"
          className={!totalOps.increased ? "text-red-500" : null}
        >
          {totalOps.update}
          {totalOps.increased ? (
            <Icon src={increase} />
          ) : (
            <Icon src={decrease} />
          )}
        </CounterLabel>
      </CounterWidget>

      <CounterWidget>
        <Icon src={filecheck} />
        <CounterLabel className="text-xs">العمليات الأخرى</CounterLabel>
        <CounterNumber>
          <span dir="ltr">{otherOps.value}</span>
          <span className="text-xl md:text-3xl">م</span>
        </CounterNumber>
        <CounterLabel
          type="primary"
          className={!otherOps.increased ? "text-red-500" : null}
        >
          {otherOps.update}
          {otherOps.increased ? (
            <Icon src={increase} />
          ) : (
            <Icon src={decrease} />
          )}
        </CounterLabel>
      </CounterWidget>

      <CounterWidget>
        <Icon src={phone} />
        <CounterLabel className="text-xs">
          عدد مرات تنزيل تطبيق أبشر
        </CounterLabel>
        <CounterNumber>
          <span dir="ltr">{absherDownloads.value}</span>
          <span className="text-xl md:text-3xl">م</span>
        </CounterNumber>
        <CounterLabel
          type="primary"
          className={!absherDownloads.increased ? "text-red-500" : null}
        >
          {absherDownloads.update}
          {absherDownloads.increased ? (
            <Icon src={increase} />
          ) : (
            <Icon src={decrease} />
          )}
        </CounterLabel>
      </CounterWidget>

      <CounterWidget>
        <Icon src={headphone} />
        <CounterLabel className="text-xs">
          احتياج المستخدم لمركز الدعم الفني
        </CounterLabel>
        <CounterNumber>
          <span dir="ltr">{techSupportNeed.value}</span>
          <span className="text-xl md:text-3xl">م</span>
        </CounterNumber>
        <CounterLabel
          type="primary"
          className={!techSupportNeed.increased ? "text-red-500" : null}
        >
          {techSupportNeed.update}
          {techSupportNeed.increased ? (
            <Icon src={increase} />
          ) : (
            <Icon src={decrease} />
          )}
        </CounterLabel>
      </CounterWidget>

      <CounterWidget>
        <Icon src={headphone} />
        <CounterLabel className="text-xs">إجمالي الهويات الرقمية</CounterLabel>
        <CounterNumber>
          <span dir="ltr">{totalDigitalIds.value}</span>
          <span className="text-xl md:text-3xl">م</span>
        </CounterNumber>
        <CounterLabel
          type="primary"
          className={!totalDigitalIds.increased ? "text-red-500" : null}
        >
          {totalDigitalIds.update}
          {totalDigitalIds.increased ? (
            <Icon src={increase} />
          ) : (
            <Icon src={decrease} />
          )}
        </CounterLabel>
      </CounterWidget>
    </div>
  );
}

export default TabContent;
