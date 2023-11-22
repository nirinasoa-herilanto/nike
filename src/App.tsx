import React from 'react';

import {
  AboutUs,
  CustomerReview,
  Hero,
  NewsLetter,
  PopularProducts,
  Services,
  SpecialOffer,
} from './components/section';

const App = () => {
  return (
    <React.Fragment>
      <Hero id="home" />
      <PopularProducts id="products" />
      <AboutUs id="about-us" />
      <Services id="services" />
      <SpecialOffer id="special-offer" />
      <CustomerReview id="customer-review" />
      <NewsLetter id="news-letter" />
    </React.Fragment>
  );
};

export default App;
