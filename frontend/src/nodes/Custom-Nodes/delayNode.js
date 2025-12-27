import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms ?? "500");

  return (
    <BaseNode
      title="Delay"
      description="Wait before continuing(ms)."
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in`, className: "!left-[-6px]" },
        { type: "source", position: Position.Right, id: `${id}-out`, className: "!right-[-6px]" },
      ]}
    >
      <input
        className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
        value={ms}
        onChange={(e) => setMs(e.target.value)}
        placeholder="Milliseconds"
        inputMode="numeric"
      />
    </BaseNode>
  );
};