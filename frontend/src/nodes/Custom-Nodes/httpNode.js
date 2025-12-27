import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../baseNode";

export const HTTPNode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method ?? "GET");
  const [url, setUrl] = useState(data?.url ?? "https://api.example.com");

  return (
    <BaseNode
      title="HTTP"
      description="Call an API endpoint."
      className="w-[300px]"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in`, className: "!left-[-6px]" },
        { type: "source", position: Position.Right, id: `${id}-out`, className: "!right-[-6px]" },
      ]}
    >
      <div className="flex gap-2">
        <select className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40" value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input
          className="nodrag w-full rounded-md border border-white/30 bg-white/20 px-2 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#a259f7]/40"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
        />
      </div>
    </BaseNode>
  );
};