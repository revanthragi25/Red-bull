import HeroSlider from '../../components/HeroSlider/HeroSlider';
import StorySection from '../../components/StorySection/StorySection';
import AthleteSection from '../../components/AthleteSection/AthleteSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSlider />
      <StorySection />
      <AthleteSection />
      <ProductSection />
      <Gallery />
      <Footer/>
    </>
  );
}

export default Home;
