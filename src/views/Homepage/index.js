import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";

// Components
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "./components/HeroImage";
import TabsMenu from "./components/TabsMenu";
import QuoteLogo from "../../assets/img/logo-urban.png";
import CollaborationSection from "./components/CollaborationSection";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="w-screen bg-neutral-100">
        <div className="relative max-w-desktop py-40 m-auto">
          <div className="relative z-10 flex flex-col gap-8">
            <h1 className="w-[820px]">
              Everything you need to be more productive
            </h1>
            <p className="w-[720px] text-2xl text-neutral-600">
              Saatnya kembali fokus terhadap pengembangan bisnis, sisanya
              biarkan teknologi kami yang bantu urus.
            </p>
            <button className="w-fit flex items-center gap-1 text-primary font-semibold text-2xl hover:gap-3 transition-all">
              <span className="leading-tight">Temukan produk</span>
              <FaArrowRight size={16} />
            </button>
          </div>
          <div className="absolute top-40 -right-[360px] flex flex-col justify-center items-center">
            <HeroImage className={"w-full"} />
          </div>
        </div>
      </div>
      {/* Post Section */}
      <div className="relative max-w-desktop m-auto py-16">
        <h3>Solusi untuk segala kebutuhan bisnis Anda</h3>
        <div className="mt-6">
          <TabsMenu />
        </div>
      </div>
      {/* Quotes Section */}
      <div className="max-w-desktop mx-auto flex flex-col items-center gap-6 py-16">
        <div className="w-24">
          <img src={QuoteLogo} alt={"Logo Urban"} />
        </div>
        <p className="max-w-3xl m-auto font-semibold text-3xl text-center leading-10">
          Over the years we have used Envato to access website themes and
          creative assets to build our news content platform, UrbanGeekz.com. We
          have also purchased everything from stock photos, digital templates,
          and other critical tools for our live website. I love the way Envato
          keeps us informed about theme updates and new trends in the industry.
          I would highly recommend Envato.
        </p>
        <p className="w-fit">
          <span className="font-semibold">Kunbi Tinuoye</span>, Founder & CEO
        </p>
      </div>
      {/* Industry Collaboration */}
      <div className="max-w-desktop mx-auto">
        <CollaborationSection />
      </div>
      {/* Footer */}
      <Footer />
    </DefaultLayout>
  );
};

export default Homepage;
