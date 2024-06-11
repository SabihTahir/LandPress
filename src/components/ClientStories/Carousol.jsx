/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Stars from "./Stars";

const Carousol = ({ name, message, image, id }) => {
  return (
    <>
      <div className="bg-[#F4FAFA] p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </div>
          <p className="text-lg">{message}</p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14">
              <img
                src={image}
                alt="Client"
                className="img-fluid rounded-full"
              />
            </div>
            <div>
              <h1 className="text-lg">{name}</h1>
              <p className="text-sm">{id}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousol;
