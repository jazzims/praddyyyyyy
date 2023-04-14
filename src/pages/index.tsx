import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo

const Home: FC = memo(() => {
  const {description} = homePageMeta;
  return (
    <Page description={description} title="SCAM ALERT PRADYUMAN GAUR">
      <Hero />
      <About />
      <Resume />
      <Testimonials />  
      <Footer />
    </Page>
  );
});

export default Home;
