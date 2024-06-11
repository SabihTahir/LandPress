import CaseStudentsContent from "./CaseStudentsContent";

const CaseStudies = () => {

    const para1 = "Helped navigate regulatory challenges. Valued advisors for strategic financial decisions.";
    const para2 = "Stellar support in navigating market complexities. Trusted partners for financial growth.";
    const para3 = "Innovative solutions tailored to our needs. A reliable partner for our financial excellence.";

  return (
    <>
      <section className="bg-[#F4FAFA] px-4 py-12">
        <main className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 ">
            <div className="text-[#024550] text-5xl font-semibold">
              <h1 className="mb-1">Those who</h1>
              <h1>made a change</h1>
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
                All case studies
              </button>
            </div>
          </div>
          <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                <CaseStudentsContent para={para1}/>
                <CaseStudentsContent para={para2}/>
                <CaseStudentsContent para={para3}/>
          </div>
        </main>
      </section>
    </>
  );
};

export default CaseStudies;
