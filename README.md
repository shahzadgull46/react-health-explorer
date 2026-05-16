# 🥗 Grocery App — React Learning Notes

This document tracks concepts implemented while building features inside my Grocery App project. Every concept was learned through building actual features instead of isolated examples.

---
## 🌐 Live Demo
Experience the project here:  
👉 https://react-health-explorer.vercel.app

# 🚀 Features Implemented

- Higher Order Components (HOC)
- Preference Match scoring system
- Health data mapping layer
- Accordion functionality
- Controlled vs Uncontrolled components
- Lifting State Up
- API data transformation
- Defensive rendering

---

# 🧠 Dynamic Health Card System (React + Open Food Facts API)

A fully dynamic React system that converts API data into structured health sections using mapping, safe rendering, and accordion UI patterns.

---

## 🚀 Project Overview

This project transforms raw API data into a **dynamic, structured UI** using React.

It focuses on:
- Safe API handling
- Dynamic rendering
- Reusable components
- Clean UI architecture

---

## ⚠️ Problem

API data is not always available on first render.

```js
productInfo.nutriments

If productInfo = null → App crashes ❌

🛡️ Solution
✔️ Safe Data Check
if (!product) return {};
✔️ Conditional Mapping
const health = productInfo ? mapHealthData(productInfo) : null;

👉 Never access API data without validation.

🧱 Sections Structure
const sections = [
  { key: "nutrition", title: "Nutrition", data: health.nutrition },
  { key: "safety", title: "Safety", data: health.safety },
  { key: "diet", title: "Diet", data: health.diet },
  { key: "environment", title: "Environment", data: health.environment }
];
🎯 Accordion State
const [openIndex, setOpenIndex] = useState(null);

const handleClick = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
🔁 Dynamic Rendering
{sections.map((section, index) => (
  <div key={section.key}>

    <p onClick={() => handleClick(index)}>
      {section.title}
    </p>

    {openIndex === index && (
      <div>{renderSectionData(section)}</div>
    )}

  </div>
))}
⚡ Click Rule
onClick={function()}   ❌ runs immediately  
onClick={() => function()} ✅ runs on click
🔄 Generic Object Renderer
const renderObjectData = (data) => (
  <div>
    {Object.entries(data || {}).map(([key, value]) => (
      <p key={key}>
        <b>{key}:</b> {value}
      </p>
    ))}
  </div>
);

👉 Converts API object → dynamic UI automatically

🧠 Section Rendering Logic
const renderSectionData = (section) => {
  if (section.key === "nutrition") return renderObjectData(section.data);
  if (section.key === "safety") return renderObjectData(section.data);
  if (section.key === "environment") return renderObjectData(section.data);

  if (section.key === "diet") {
    return (
      <div>
        <p><b>Vegan:</b> {section.data?.vegan ? "Yes" : "No"}</p>
        <p><b>Vegetarian:</b> {section.data?.vegetarian ? "Yes" : "No"}</p>
      </div>
    );
  }

  return <p>No data available</p>;
};
🧩 Architecture Flow
API → mapHealthData → sections → Accordion → renderSectionData → UI
🔥 Key Learnings
Safe API handling in React
Dynamic rendering using .map()
Object transformation using Object.entries()
Accordion state management
Reusable UI logic
Clean separation of data & UI
