import React from "react";
import { Header, Footer } from "../index";
import { RootModal } from "../../contexts/root-modal/root-modal";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <RootModal />
    </React.Fragment>
  );
}
