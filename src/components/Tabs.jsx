import { useState } from "react";
import portfolioData from "../data/portfolioData";
import WorkCard from "./WorkCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Work");
  const tabs = ["Work", "Education"];

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center space-x-1 mb-4 p-1 rounded-lg bg-[var(--light-border)] dark:bg-[var(--dark-border)] w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium cursor-pointer h-9 rounded-md flex-1 ${
                activeTab === tab
                  ? "bg-[var(--light-background)] text-[var(--light-text)] dark:bg-[var(--dark-background)] dark:text-[var(--dark-text)]"
                  : "bg-[var(--light-border)] text-[var(--light-text)] dark:bg-[var(--dark-border)] dark:text-[var(--dark-text)] hover:bg-[var(--light-background)]/50 hover:dark:bg-[var(--dark-background)]/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl p-4 space-y-6 w-full">
          {portfolioData[0][activeTab].map((item, idx) => (
            <WorkCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
