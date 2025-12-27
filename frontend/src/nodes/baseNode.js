import React from "react";
import { Handle, Position } from "reactflow";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const isBeforeContent = (position) => position === Position.Left || position === Position.Top;

export const BaseNode = ({ title, description, handles = [], className, children }) => {
  const beforeHandles = handles.filter((h) => isBeforeContent(h.position));
  const afterHandles = handles.filter((h) => !isBeforeContent(h.position));

  const renderHandle = (h, idx) => (
    <Handle
      key={h.key ?? `${h.id ?? "handle"}-${h.type ?? "t"}-${h.position ?? "p"}-${idx}`}
      type={h.type}
      position={h.position}
      id={h.id}
      className={cx("!w-3 !h-3 !rounded-full !bg-gradient-to-br !from-[#a259f7] !to-[#f357a8] !border-2 !border-white", h.className)}
    />
  );

  return (
    <div className={cx("relative w-[240px] min-h-[80px] rounded-xl border border-white/30 bg-gradient-to-br from-[#7b2ff2]/80 to-[#f357a8]/80 backdrop-blur-md shadow-xl", className)}>
      {beforeHandles.map(renderHandle)}

      <div className="flex flex-col">
        <div className="bg-white/40 px-3 py-1 border-b border-white">
          <div className="text-base font-semibold text-white drop-shadow">{title}</div>
        </div>

        {description ? (<div className="text-sm text-white/80 px-2 mt-1">{description}</div>) : null}

        {children ? <div className="px-3 py-2 space-y-2">{children}</div> : null}
      </div>

      {afterHandles.map(renderHandle)}
    </div>
  );
};