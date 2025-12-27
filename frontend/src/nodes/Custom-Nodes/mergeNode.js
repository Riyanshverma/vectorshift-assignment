import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const MergeNode = ({ id, data }) => {
  const [mode, setMode] = useState(data?.mode ?? "concat");

  return (
    <BaseNode
      title="Merge"
      description="Combine two inputs."
      handles={[
        { type: "target", position: Position.Left, id: `${id}-a`, className: "!top-[35%] !left-[-6px]" },
        { type: "target", position: Position.Left, id: `${id}-b`, className: "!top-[70%] !left-[-6px]" },
        { type: "source", position: Position.Right, id: `${id}-out`, className: "!right-[-6px]" },
      ]}
    >
      <select className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40" value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="concat">Concat</option>
        <option value="json">JSON Merge</option>
        <option value="list">List Append</option>
      </select>
    </BaseNode>
  );
};