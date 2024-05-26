import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: 1, label: "Tab 1", content: "Content for Tab 1" },
  { id: 2, label: "Tab 2", content: "Content for Tab 2" },
  { id: 3, label: "Tab 3", content: "Content for Tab 3" },
  { id: 4, label: "Tab 4", content: "Content for Tab 4" },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: activeTab === tab.id ? "#007bff" : "#ccc",
              color: activeTab === tab.id ? "#fff" : "#000",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        <AnimatePresence>
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabComponent;
