import React from "react";
import { noop } from "@reduxjs/toolkit/dist/listenerMiddleware/utils";

type AddComponentsCTA = {
  onClick: () => void;
};
function AddComponentsCTA({ onClick }: AddComponentsCTA) {
  return (
    <div className="p-8">
      <button
        onClick={onClick}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors border border-dashed border-blue-200 rounded-lg p-4 w-full justify-center hover:border-blue-300">
        <span className="text-xl">+</span>
        <span>Add component</span>
      </button>
    </div>
  );
}

export default AddComponentsCTA;
