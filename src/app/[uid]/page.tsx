import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  let page = null;
  try {
    page = await client.getByUID("page", "home");
  } catch (error) {
    console.log("prismic", error);
  }
  return {
    title:
      prismic.asText(page?.data.title) | prismic.asText(settings.data.name),
  };
}
export default async function Page({ params }) {
  const client = createClient();
  const pages = await client.getAllByType("page");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  let page = null;
  try {
    page = await client.getByUID("page", params.uid);
  } catch (error) {
    console.log("prismic test", error);
    return <div>404</div>;
  }
  return (
    <Layout navigation={navigation} settings={settings}>
      <SliceZone slices={page?.data.slices} components={components} />
    </Layout>
  );
}

// export async function getStaticProps({ params, previewData }) {
//   const client = createClient({ previewData });
//   const pages = await client.getAllByType("page");
//   const page = await client.getByUID("page", params.uid);
//   const navigation = await client.getSingle("navigation");
//   const settings = await client.getSingle("settings");

//   return {
//     props: {
//       page,
//       navigation,
//       settings,
//     },
//   };
// }
export const dynamicParams = false;
export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => prismic.asLink(page));
}
