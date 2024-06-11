/* eslint-disable react/no-unescaped-entities */

const HeroForm = () => {
  return (
    <>
      <div className="bg-white p-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Book free consultation</h1>
          <p className="text-lg">
            Fill out the form below, and we'll arrange a consultation at a time
            most suitable for you.
          </p>
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="p-4 bg-[#F4FAFA] w-full"
              placeholder="Your name*"
            />
            <input
              type="text"
              className="p-4 bg-[#F4FAFA] w-full"
              placeholder="Company Name*"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="p-4 bg-[#F4FAFA] w-full"
              placeholder="Phone Number*"
            />
            <input
              type="text"
              className="p-4 bg-[#F4FAFA] w-full"
              placeholder="Your Email*"
            />
          </div>
          <textarea
            name=""
            id=""
            rows={6}
            className="p-4 bg-[#F4FAFA] w-full"
          ></textarea>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="cursor-pointer"
            />
            <label htmlFor="check">
              I understand and agree to the{" "}
              <span className="text-green-500">Privacy Policy</span>
            </label>
          </div>
          <button className="bg-green-500 text-white hover:bg-[#024550] py-4 px-6">
            Submit request
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroForm;
