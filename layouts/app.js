import React from "react";

export default function App({ children }) {
  return (
    <div className="min-h-screen tracking-tighter text-gray-800">
      {children}
    </div>
  );
}
