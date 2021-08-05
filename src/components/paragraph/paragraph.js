import React from "react";
import cn from "classnames";

export default function Paragraph({ title, children, className, ...props }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center flex-col py-5 my-5",
        className
      )}
      {...props}
    >
      <h2 className="font-bold text-3xl font-montserrat">{title}</h2>
      {children}
    </div>
  );
}
