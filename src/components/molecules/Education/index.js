import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-24">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

        {/* Animation */}
        <div>
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>

        {/* Content */}
        <div className="mx-auto lg:ml-auto flex flex-col gap-6">

          {/* BCA */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-sm text-neutral font-semibold">
                2021 - 2024
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Completed BCA from{" "}
              <b>
                Makhanlal Chaturvedi National University of Journalism and
                Communication, Bhopal
              </b>
              . Built a strong foundation in programming, data structures, and
              web development.
            </p>
          </div>

          {/* Full Stack Experience */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] md:ml-[120px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                Full Stack Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">
                1.5 Years Experience
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Working as a Full Stack Developer with hands-on experience in{" "}
              <b>React.js,Next Js, Node.js, Express.js, MySQL</b>. Built responsive web
              applications and REST APIs with clean and scalable architecture.
            </p>
          </div>

          {/* 12th */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                Higher Secondary (12th)
              </h3>
              <p className="text-sm text-neutral font-semibold">
                Passed in 2021
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Completed Higher Secondary education with a focus on academic
              fundamentals and core subjects.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;