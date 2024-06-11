import Carousel from "./Carousol";
import StoriesContent from "./StoriesContent";
import { useEffect, useState } from "react";

const ClientStories = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [translatePercent, setTranslatePercent] = useState(35.5);

  const data = [
    {
      id: 1,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 2,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 3,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 4,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 5,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 6,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 7,
      name: "Name",
      message:
        "Exceptional service! Their strategic insights have propelled our business forward like never before.",
      image: "https://via.placeholder.com/200x200",
    },
  ];

  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (startIndex < data.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setTranslatePercent(35.5);
      } else {
        setTranslatePercent(100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="md:py-20 py-10">
        <StoriesContent />

        <div className="relative">
          <div className="overflow-hidden max-w-6xl mx-auto">
            <div
              className="flex gap-6 transition-transform duration-500 py-20 md:px-0 px-4"
              style={{
                transform: `translateX(-${startIndex * translatePercent}%)`,
              }}
            >
              {data.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-full md:w-1/3">
                  <Carousel
                    id={item.id}
                    name={item.name}
                    message={item.message}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <i
            onClick={handleLeftArrowClick}
            className="fa fa-arrow-left text-green-500 absolute top-1/2 -translate-y-1/2 md:left-28 left-0 rounded-full border-2
             border-green-500 p-3 cursor-pointer"
          ></i>
          <i
            onClick={handleRightArrowClick}
            className="fa fa-arrow-right text-green-500 absolute top-1/2 -translate-y-1/2 md:right-28 right-4 rounded-full 
            border-2 border-green-500 p-3 cursor-pointer"
          ></i>
        </div>
      </section>
    </>
  );
};

export default ClientStories;
