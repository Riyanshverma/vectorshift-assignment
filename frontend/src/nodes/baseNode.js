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
      className={cx("!w-3 !h-3 !rounded-full !bg-black !border-2 !border-gray-300", h.className)}
    />
  );

  return (
    <div className={cx("relative w-[200px] min-h-[80px] rounded-xl border border-black bg-white px-3 py-2 text-black shadow-sm", className)}>
      {beforeHandles.map(renderHandle)}

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="text-sm font-semibold leading-none">{title}</div>
        </div>

        {description ? (<div className="text-sm text-gray-600">{description}</div>) : null}

        {children ? <div className="space-y-2">{children}</div> : null}
      </div>

      {afterHandles.map(renderHandle)}
    </div>
  );
};