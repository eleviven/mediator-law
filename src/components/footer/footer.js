import React from "react";
import Link from "next/link";
import { SocialLinks } from "../index";
import { APP } from "../../constants/app";
import styles from "./footer.module.css";

const FOOTER_NAV_LIST = [
  {
    title: "Haqqımızda",
    url: "/",
  },
  {
    title: "Əlaqə",
    url: "/",
  },
  {
    title: "Xidmətlərimiz",
    url: "/",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
          <ul className={styles.footer_nav}>
            {FOOTER_NAV_LIST.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <SocialLinks data={APP.SOCIAL} className="mt-5" />
          <div className="text-sm mt-5 leading-relaxed">
            <div>Copyright 2020 {APP.NAME} | Bütün hüquqlar qorunur.</div>
            <div>
              Developed by{" "}
              <a
                href={APP.DEVELOPER.URL}
                target="_blank"
                className="text-primary"
              >
                {APP.DEVELOPER.TITLE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
