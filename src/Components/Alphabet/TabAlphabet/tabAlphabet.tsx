import React, { useState } from "react";
import "./tabAlphabet.css";

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Hiragana");

    return (
        <div className="tabs-container">
            <div className="tabs">
                {["Hiragana", "Katakana", "Kanji"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
