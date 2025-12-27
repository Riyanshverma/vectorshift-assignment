// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace("customInput-", "input_"));
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-value`,
          className: "!right-[-6px]"
        },
      ]}
      className="w-[220px]"
    >
      <label className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">Name</span>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="nodrag w-[120px] rounded-md border border-black bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-black/20"
        />
      </label>

      <label className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">Type</span>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="nodrag w-[120px] rounded-md border border-black bg-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
