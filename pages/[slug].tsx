import NavBar from "@/components/Navbar";
import broadcasts, { Broadcast } from "@/utils/broadcasts";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Head from "next/head";

interface BroadcastProps {
  title: string;
  slug: string;
  videoURL: string;
}

export default function BroadcastView({
  title,
  slug,
  videoURL,
}: BroadcastProps) {
  return (
    <>
      <Head>
        <title>Videopod | {title}</title>
      </Head>
      <NavBar currentSlug={slug} />
      <video className="video-stream" src={videoURL} autoPlay controls />
    </>
  );
}

export async function getStaticPaths() {
  const paths = broadcasts.map((broadcast) => ({
    params: { slug: broadcast.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<BroadcastProps>> {
  const { slug } = context.params as { slug: string };
  const video = broadcasts.find((route) => route.slug === slug) as Broadcast;

  const feedResponse = await fetch(video.feedURL);
  const feed = await feedResponse.text();
  // Extract the video URL in mp4 format from the feed
  const [videoURL] = feed.match(/https:\/\/.*\.mp4/g) || [""];

  return {
    props: {
      title: video.title,
      slug,
      videoURL,
    },
  };
}
