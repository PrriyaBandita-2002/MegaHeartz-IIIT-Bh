import React, { useEffect } from "react";
import independence from "../assets/projects/independence.jpg";
import kalakriti from "../assets/projects/kalakriti aftermovie.webp";
import freshers from "../assets/projects/freshers.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const Projects = () => [
    {
      id: 1,
      src: independence,
      video: "https://youtu.be/K0zPaPCEvag?si=VebaLcus2JaqkWvc",
    },
    {
      id: 2,
      src: kalakriti,
      video: "https://youtu.be/GBHYGlLd8Uk?si=_JVab-3eltO5S7aH",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <br />
      <br />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </h2>
          <p className="py-6 text-pink-500">Check out our amazing work!!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {Projects().map(({ id, src, desc, video }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Ai"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-2 text-justify font-extralight">{desc}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md">
                  <a href={video} target="_blank">
                    Video
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Projects;
