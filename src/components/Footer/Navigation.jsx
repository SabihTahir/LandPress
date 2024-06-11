import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <section className="px-2 border-b border-white py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col gap-4 text-white">
              <Link to="/" className="text-3xl">
                LandPress
              </Link>
              <p className="text-white">
                Modern landing pages that captivate audiences and drive
                conversions.
              </p>
              <div className="flex items-center gap-3">
                <i className="fa fa-facebook text-green-500 bg-white/10 py-4 px-5 hover:bg-green-500 hover:text-white  cursor-pointer"></i>
                <i className="fa fa-facebook text-green-500 bg-white/10 py-4 px-5 hover:bg-green-500  hover:text-white cursor-pointer"></i>
                <i className="fa fa-facebook text-green-500 bg-white/10 py-4 px-5 hover:bg-green-500  hover:text-white cursor-pointer"></i>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:text-center text-start">
              <h1 className="font-medium text-white text-lg">Features</h1>
              <div className="flex flex-col gap-1">
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:text-center text-start">
              <h1 className="font-medium text-white text-lg">Features</h1>
              <div className="flex flex-col gap-1">
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
                <Link to="#" className="text-white hover:text-green-500">
                  Page builder
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 ">
              <h1 className="font-medium text-white text-lg">Business hours</h1>
                <div className="flex items-center justify-between gap-2 border-b pb-4">
                    <h1 className="text-white">Weekdays</h1>
                    <p className="text-white">09.00 AM - 21.00 PM</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-b pb-4">
                    <h1 className="text-white">Weekdays</h1>
                    <p className="text-white">09.00 AM - 21.00 PM</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <h1 className="text-white">Sunday</h1>
                    <p className="text-white">Close</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigation;
