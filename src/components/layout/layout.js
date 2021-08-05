import React from "react";
import { Header, Footer } from "../index";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
