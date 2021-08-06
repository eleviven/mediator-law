import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

const convertBreadcrumb = (string) => {
  return (
    string
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      .replace(/ue/g, "ü")
      // I will solve this part better
      .replace("home", "Ana Səhifə")
      .replace("services", "Xidmətlər")
      .replace("articles", "Məqalələr")
      .replace("contact", "Əlaqə")
  );
};

export default function Breadcrumb({ className, ...props }) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath
        .filter((i) => i)
        .map((path, i) => {
          return {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i + 1).join("/"),
          };
        });

      setBreadcrumbs([{ breadcrumb: "home", href: "/" }, ...pathArray]);
    }
  }, [router]);

  if (!breadcrumbs || breadcrumbs?.length <= 1) {
    return null;
  }

  return (
    <ul className={cn("flex items-center", className)} {...props}>
      {breadcrumbs.map((i, index) => (
        <li key={index} className="capitalize text-sm">
          <Link href={i.href}>
            <a className="text-gray-400 hover:text-primary">
              {convertBreadcrumb(i.breadcrumb)}
            </a>
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className="text-gray-400 mx-1">・</span>
          )}
        </li>
      ))}
    </ul>
  );
}
