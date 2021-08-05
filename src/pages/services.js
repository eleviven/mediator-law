import React from "react";
import Link from "next/link";
import { Layout, Head, Hero, Grid, ServiceCard } from "../components";

export default function Services() {
  const PAGE = {
    title: "Xidmətlər",
  };

  const data = Array(12).fill();

  return (
    <Layout>
      <Head {...PAGE} />
      <Hero title={PAGE.title} showBreadcrumb={true} />
      <section className="md:mb-17">
        <Grid.Container>
          <Grid className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
            {data.map((item, index) => (
              <Link key={index} href="/">
                <a>
                  <ServiceCard
                    title="Hüquqi şəxslərin qeydiyyatı"
                    icon="far fa-home-alt"
                  />
                </a>
              </Link>
            ))}
          </Grid>
        </Grid.Container>
      </section>
    </Layout>
  );
}
