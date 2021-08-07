import React from "react";
import { Hero, Layout } from "../../components";

export default function Article() {
  return (
    <Layout>
      <Hero title="Test" showBreadcrumb={true} />
    </Layout>
  );
}
