import React from "react";
import cn from "classnames";

export default function Container({ children, className, ...props }) {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  );
}
