import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection";
import Article from "../components/Articles/Article";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import ClientStories from "../components/ClientStories/ClientStories";
import MarketingSection from "../components/MarketingSections/MarketingSection";


const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <MarketingSection/>
    <CaseStudies/>
    <ClientStories/>
    <Article/>
    </>
  )
}

export default Home