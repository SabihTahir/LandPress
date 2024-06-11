import AboutSectionCard from "./AboutSectionCard";

const AboutSection = () => {
  return (
    <>
      <section className="bg-[#F4FAFA] px-4 py-12">
        <main className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 ">
            <div className="text-[#024550] text-5xl font-semibold">
              <h1 className="mb-1">Big or small?</h1>
              <h1>We have a plan</h1>
            </div>
            <div className="">
              <p className="">
                Our comprehensive solutions empower you to unleash the full
                potential of your business, providing the tools, strategies, and
                guidance needed to drive sustainable growth.
              </p>
            </div>
            <div className="md:text-center text-start">
              <button className="bg-[#024550] text-white py-4 px-10 hover:bg-green-500 text-center">
                About us
              </button>
            </div>
          </div>
          <div className="my-12 grid grid-cols-1 md:grid-cols-4">
           <AboutSectionCard/>
           <AboutSectionCard/>
           <AboutSectionCard/>
           <AboutSectionCard/>  
          </div>
        </main>
      </section>
    </>
  );
};

export default AboutSection;
