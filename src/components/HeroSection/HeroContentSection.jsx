/* eslint-disable react/no-unescaped-entities */

import HeroForm from "./HeroForm"


const HeroContentSection = () => {
  return (
    <>
    <section className="md:py-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-white">
            <div className="flex flex-col md:gap-[60vh] gap-4">
                <div className="flex flex-col items-start gap-2">
                    <h3 className="text-white md:text-lg bg-white/10 px-2">Market research and analysis</h3>
                    <h1 className="text-white md:text-5xl text-xl font-semibold">Empowering your business potential</h1>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <p className="text-white md:text-xl ">Unlock your business's potential with our tailored services. Let's achieve success together.</p>
                    <button className="bg-white hover:bg-green-500 hover:text-white md:py-4 py-2 px-6">Learn more</button>
                </div>
            </div>
            {/* Form */}
            <HeroForm/>
        </div>
    </section>
    </>
  )
}

export default HeroContentSection