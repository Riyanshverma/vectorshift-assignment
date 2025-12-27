// textNode.js

import { useState, useRef } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

function extractVariables(text) {
  const regex = /\{\{([a-zA-Z_][a-zA-Z0-9_]*)\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const textareaRef = useRef(null);
  const variables = extractVariables(currText);
  const rows = Math.max(2, variables.length + 1);

  const handles = [
    ...variables.map((v, i) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-var-${v}`,
      className: "!left-[-6px]",
      key: v,
      style: { top: `${30 + i * 30}px` },
    })),
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
      className: "!right-[-6px]",
    },
  ];

  const minHeight = Math.max(80, 40 + variables.length * 30);

  return (
    <BaseNode
      title="Text"
      handles={handles}
      className={`w-[260px]`}
      style={{ minHeight: `${minHeight}px` }}
    >
      <label className="flex flex-col gap-1">
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40 resize-none"
          placeholder="Type text here, use {{variable}} for handles"
          rows={rows}
          style={{ minHeight: "40px", maxHeight: "200px", overflow: "auto" }}
        />
      </label>
    </BaseNode>
  );
};
