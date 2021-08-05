import React from "react";
import cn from "classnames";
import Button from "../button/button";

export default function SocialLinks({ data, className, ...props }) {
  return (
    <ul
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {data?.map((item, index) => (
        <li key={index} className="mx-1">
          <Button
            title={item.title}
            variant="secondary"
            appearance="filled"
            accessoryLeft={<i className={cn("mr-2", item.icon)} />}
          />
        </li>
      ))}
    </ul>
  );
}
