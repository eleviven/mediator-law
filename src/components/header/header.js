import React from "react";
import Link from "next/link";
import Button from "../button/button";
import Brand from "../brand/brand";
import { PhoneIcon } from "@heroicons/react/outline";
import { APP } from "../../constants/app";
import styles from "./header.module.css";

const NAVBAR_LIST = [
  {
    title: "Ana Səhifə",
    url: "/",
  },
  {
    title: "Xidmətlərimiz",
    url: "/",
  },
  {
    title: "Suallar",
    url: "/",
  },
  {
    title: "Məqalələr",
    url: "/",
  },
  {
    title: "Əlaqə",
    url: "/",
  },
];

const PHONE = APP.CONTACT.PHONE[0];

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_content}>
          <div className={styles.header_brand}>
            <Link href="/">
              <a>
                <Brand />
              </a>
            </Link>
          </div>
          <div className={styles.header_collapse}>
            <ul className={styles.header_nav}>
              {NAVBAR_LIST.map((item, index) => (
                <li key={index}>
                  <a>
                    <Button
                      title={item.title}
                      variant="primary"
                      appearance="transparent"
                      className="font-semibold"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.header_nav}>
            <li>
              <a href={`tel:${PHONE.url}`} className="flex items-center">
                {<PHONE.icon width={18} className="mr-2" />}
                {PHONE.title}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
