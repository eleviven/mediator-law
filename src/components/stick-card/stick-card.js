import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Card from "../card/card";
import styles from "./stick-card.module.css";

export default function StickCard({
  title,
  icon,
  content,
  children,
  ...props
}) {
  const Icon = icon;
  return (
    <Card {...props}>
      <div className={styles.element}>
        {icon && <Icon className={styles.element_icon} />}
        <div className={styles.element_content}>
          {title && <small className={styles.element_title}>{title}</small>}
          {Array.isArray(content)
            ? content.map((item, index) => (
                <div key={index}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      className={styles.element_content_link}
                    >
                      {item.value}
                      <ExternalLinkIcon
                        className={styles.element_external_icon}
                      />
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              ))
            : content}
          {children}
        </div>
      </div>
    </Card>
  );
}
