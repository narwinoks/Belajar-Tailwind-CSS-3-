import React from "react";

export default function Label({forInput, children}) {
  return (
    <label className="blok text-gray-700 mb-8 capitalize" htmlFor={forInput}>
      {children}
    </label>
  );
}
