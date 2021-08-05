import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";

export default function Hero({ title, showBreadcrumb, ...props }) {
  return (
    <div className="relative" {...props}>
      <div className="container">
        <div className="flex items-center justify-center flex-col h-72">
          {title && (
            <h1 className="text-5xl font-extrabold font-montserrat">{title}</h1>
          )}
          {showBreadcrumb && <Breadcrumb className="mt-4" />}
        </div>
      </div>
    </div>
  );
}
