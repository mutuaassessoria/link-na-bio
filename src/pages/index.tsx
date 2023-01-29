import { Avatar } from "components/Avatar";
import { CarouselHeader } from "components/CarouselHeader";
import { Footer } from "components/Footer";
import { LinksList } from "components/LinksList";
import { Subscribe } from "components/Subscribe";
import { VideoModal } from "components/VideoModal";
import { Layout } from "layout/Layout";

export default function Home() {
  return (
    <Layout>
      <CarouselHeader />
      <Avatar />
      <LinksList />
      <Subscribe />
      <Footer />
      <VideoModal />
    </Layout>
  );
}
