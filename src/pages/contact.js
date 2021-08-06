import React from "react";
import { ShareIcon } from "@heroicons/react/outline";
import {
  Layout,
  Head,
  Hero,
  Grid,
  Map,
  SocialLinks,
  StickCard,
} from "../components";
import { APP } from "../constants/app";

export default function Contact() {
  const PAGE = {
    title: "Əlaqə",
  };

  return (
    <Layout>
      <Head {...PAGE} />
      <Hero title={PAGE.title} showBreadcrumb={true} />
      <section className="md:mb-17">
        <Grid.Container>
          <Grid className="lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
            {Object.values(APP.CONTACT).map((item, index) => {
              return (
                <StickCard
                  key={index}
                  title={item.title}
                  content={item.data}
                  icon={item.icon}
                />
              );
            })}
            <StickCard title="Sosial mediada biz" icon={ShareIcon}>
              <SocialLinks data={APP.SOCIAL} className="mt-2" />
            </StickCard>
          </Grid>
        </Grid.Container>
      </section>
      <section className="-mb-10">
        <Map
          mapCenter={APP.MAP_LOCATION.CENTER}
          markerPosition={APP.MAP_LOCATION.MARKER}
          markerPopupComponent={APP.TITLE}
        />
      </section>
    </Layout>
  );
}
