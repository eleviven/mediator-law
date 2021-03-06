import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";
import {
  Layout,
  Display,
  Head,
  Paragraph,
  Grid,
  ServiceCard,
  ArticleCard,
} from "../components";
import { GRID_BREAKPOINTS } from "../constants";

export default function Home(props) {
  return (
    <Layout>
      <Head />
      <Display />
      <Paragraph title="Xidmətlərimiz" />
      <Grid.Container className="mb-10">
        <Grid className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
          <Link href="/">
            <a>
              <ServiceCard
                title="Hüquqi şəxslərin qeydiyyatı"
                icon="far fa-home-alt"
              />
            </a>
          </Link>
        </Grid>
      </Grid.Container>
      <Paragraph title="Hüquq Məqalələri" />
      <Grid.Container>
        <Masonry
          breakpointCols={GRID_BREAKPOINTS}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          <ArticleCard
            title="Şəxsiyyət vəsiqəsini itirdikdə nə etməliyik ?"
            image="https://cdn.mediator-huquq.az/images/articles/99c21b9afa1d85b3f76b08ba61083f0a.jpg"
            date={new Date()}
            className="lg:mb-8 mb-4"
          />
        </Masonry>
      </Grid.Container>
    </Layout>
  );
}
