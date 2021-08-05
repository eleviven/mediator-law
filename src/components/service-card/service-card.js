import React from "react";
import cn from "classnames";
import Card from "../card/card";

export default function ServiceCard({ title, icon, ...props }) {
  return (
    <Card {...props}>
      <div className="relative flex items-center justify-center flex-col h-36 px-5 hover:text-primary">
        {icon && <i className={cn(icon, "text-3xl")}></i>}
        {title && <strong className="font-medium md:text-lg text-sm text-center mt-3">{title}</strong>}
      </div>
    </Card>
  );
}
