import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const MathNode = ({ id, data }) => {
  const [op, setOp] = useState(data?.op ?? "add");
  const [value, setValue] = useState(data?.value ?? "1");

  return (
    <BaseNode
      title="Math"
      description="Apply a simple operation."
      className="w-[260px]"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in`, className: "!left-[-6px]" },
        { type: "source", position: Position.Right, id: `${id}-out`, className: "!right-[-6px]" },
      ]}
    >
      <div className="grid grid-cols-2 gap-2">
        <select className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40" value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="mul">Multiply</option>
          <option value="div">Divide</option>
        </select>

        <input
          className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          inputMode="decimal"
        />
      </div>
    </BaseNode>
  );
};