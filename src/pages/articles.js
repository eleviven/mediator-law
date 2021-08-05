import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Layout, Head, Hero, Grid, ArticleCard } from "../components";
import { GRID_BREAKPOINTS } from "../constants";

export default function Articles() {
  const PAGE = {
    title: "Məqalələr",
  };

  const data = Array(12).fill();

  return (
    <Layout>
      <Head {...PAGE} />
      <Hero title={PAGE.title} showBreadcrumb={true} />
      <section>
        <Grid.Container>
          <Masonry
            breakpointCols={GRID_BREAKPOINTS}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {data.map((item, index) => (
              <Link key={index} href="/">
                <a>
                  <ArticleCard
                    title="Şəxsiyyət vəsiqəsini itirdikdə nə etməliyik ?"
                    image="https://cdn.mediator-huquq.az/images/articles/99c21b9afa1d85b3f76b08ba61083f0a.jpg"
                    date={new Date()}
                    className="lg:mb-8 mb-4"
                  />
                </a>
              </Link>
            ))}
          </Masonry>
        </Grid.Container>
      </section>
    </Layout>
  );
}
