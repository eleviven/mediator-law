import React from "react";
import cn from "classnames";
import Button from "../button/button";
import { renderComponent } from "../../utils";
import styles from "./modal.module.css";

export default function Modal({
  title,
  children,
  size,
  actions,
  onClose,
  ...props
}) {
  actions?.push({
    title: "Bağla",
    variant: "danger",
    appearance: "ghost-dark",
  });

  const handleClose = (cb) => {
    if (cb) {
      cb();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={cn(styles.modal, styles[`modal_${size}`])} {...props}>
      <div className={styles.modal_content}>
        {title && <div className={styles.modal_header}>{title}</div>}
        <div className={styles.modal_body}>{renderComponent(children)}</div>
        {actions && (
          <div className={styles.modal_footer}>
            {actions?.map(({ onClick, ...action }, index) => (
              <div key={index} className={styles.modal_footer_button}>
                <Button
                  className="w-full"
                  onClick={() => handleClose(onClick)}
                  {...action}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.modal_backdrop} />
    </div>
  );
}

Modal.defaultProps = {
  size: "medium",
  actions: [],
};
