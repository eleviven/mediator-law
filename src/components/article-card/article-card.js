import React from "react";
import Image from "next/image";
import cn from "classnames";
import dayjs from "dayjs";
import Card from "../card/card";
import styles from "./article-card.module.css";

export default function ArticleCard({ title, date, image, className }) {
  return (
    <Card className={cn(styles.article, className)}>
      {image && (
        <div className={styles.article_image}>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={100}
            height={80}
          />
        </div>
      )}
      {title && (
        <div className={styles.article_content}>
          <div className={styles.article_title}>{title}</div>
          {date && (
            <div className={styles.article_date}>
              {dayjs(date).format("DD MMMM YYYY")}
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
