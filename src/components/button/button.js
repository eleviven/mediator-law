import React from "react";
import cn from "classnames";
import { renderComponent } from "../../utils";
import styles from "./button.module.css";

export default function Button({
  as,
  title,
  appearance,
  variant,
  size,
  pill,
  accessoryLeft,
  className,
  ...props
}) {
  const ButtonElement = as;
  return (
    <ButtonElement
      className={cn(
        styles.button,
        styles[`button_size_${size}`],
        styles[`button_appearance_${appearance}`],
        styles[`button_variant_${variant}`],
        pill && styles.button_pill,
        className
      )}
      {...props}
    >
      {accessoryLeft && renderComponent(accessoryLeft)}
      {title}
    </ButtonElement>
  );
}

Button.defaultProps = {
  as: "button",
  appearance: "filled",
  variant: "primary",
  size: "medium",
};
