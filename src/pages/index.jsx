import React from 'react';

import { Masthead } from '../components/layout/masthead';
import { FirstSection } from '../components/index-page/first-section';
import { AboutUsSection } from '../components/index-page/about-us-section';
import { GamesSection } from '../components/index-page/games-section';
import { GallerySection } from '../components/index-page/gallery-section';
import { FaqSection } from '../components/index-page/faq-section';
import { PriceSection } from '../components/index-page/price-section';
import { PriceListSection } from '../components/index-page/price-list-section';
import { HowToFindSection } from '../components/index-page/how-to-find-section';
import { ReferenceSection } from '../components/index-page/reference-section';
import { Footer } from '../components/layout/footer';

// TODO: refactor
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <div className="index-page">
      <SEO title="Pantheon" />
      <FirstSection />
      <main className="page-home__content">
        <Masthead />
        <AboutUsSection />
        <GamesSection />
        <GallerySection />
        <FaqSection />
        <PriceSection />
        <PriceListSection />
        <HowToFindSection />
        <ReferenceSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
