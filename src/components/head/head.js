import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { APP } from "../../constants/app";

export default function Head({
  title,
  description,
  keywords,
  url,
  image,
  children,
}) {
  const { asPath } = useRouter();
  if (!url) {
    url = asPath;
  }
  return (
    <NextHead>
      <title>{title ? `${title} | ${APP.TITLE}` : APP.TITLE}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={APP.DOMAIN + url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="az_AZ" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={APP.DOMAIN} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image:src" content={image} />
      <link rel="canonical" href={APP.DOMAIN + url} />
      <meta name="robots" content="index, follow" />
      {children}
    </NextHead>
  );
}

Head.defaultProps = {
  description: APP.DESCRIPTION,
};
