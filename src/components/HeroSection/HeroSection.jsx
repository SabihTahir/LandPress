import HeroImage from '../../assets/Images/HeroImage.jpg';
import HeroContentSection from './HeroContentSection';

const HeroSection = () => {
  

  return (
    <section className="relative">
        <img src={HeroImage} alt="" className='relative img-fluid h-[120vh] md:full' />
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/30 px-2'>
          <div className='max-w-6xl mx-auto text-white'>
              <HeroContentSection/> 
          </div>
        </div>
    </section>  
  );
};

export default HeroSection;
