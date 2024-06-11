/* eslint-disable react/no-unescaped-entities */

const Action = () => {
  return (
    <>
      <section className="px-2 border-b border-white pb-6">
        <div className="max-w-6xl mx-auto py-6">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-6">
            <div>
              <h2 className="text-green-500">Take action today</h2>
              <h1 className="text-white text-5xl w-3/4">
                Ready to supercharge your business? Let's connect
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white hover:bg-green-500 hover:text-white py-4 px-6 whitespace-nowrap">
                Discover More
              </button>
              <button className=" bg-green-500 text-white hover:bg-white hover:text-[#024550]  py-4 px-6 whitespace-nowrap">
                Book into call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Action;
