import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const SwitchNode = ({ id, data }) => {
  const [expr, setExpr] = useState(data?.expr ?? "x > 0");

  return (
    <BaseNode
      title="Switch"
      description="Route based on a condition."
      className="w-[280px]"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in`, className: "!left-[-6px]" },
        { type: "source", position: Position.Right, id: `${id}-true`, className: "!top-[35%] !right-[-6px]" },
        { type: "source", position: Position.Right, id: `${id}-false`, className: "!top-[70%] !right-[-6px]" },
      ]}
    >
      <input
        className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
        value={expr}
        onChange={(e) => setExpr(e.target.value)}
        placeholder="Condition (e.g. x > 0)"
      />
    </BaseNode>
  );
};