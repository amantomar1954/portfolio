import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import "./Project.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

// ✅ Import Images
import project1 from "../../assets/mouldspex.png";
import project2 from "../../assets/movies.png";
import project3 from "../../assets/nivesh-reelestate.png";
import project4 from "../../assets/punjabi-jutti.png";
import project5 from "../../assets/reeltor-cms.png";
import project6 from "../../assets/reeltor.png";
import project7 from "../../assets/kidzeeschool.png";

const Project = () => {

  // ✅ Your Projects Data
  const Items = [
    {
      id: 1,
      title: "Spex Moulds Website",
      image: project1,
      liveLink: "https://spexmould.vercel.app/",
      codeLink: "https://github.com/amantomar1954/mouldspex",
    },
    {
      id: 2,
      title: "Movies App (React)",
      image: project2,
      liveLink: "https://movies-brown-eta.vercel.app/",
      codeLink: "https://github.com/amantomar1954/movies",
    },
    {
      id: 3,
      title: "Nivesh Real Estate",
      image: project3,
      liveLink: "https://niveshsharthi.vercel.app/",
      codeLink: "https://github.com/amantomar1954/niveshsharthi",
    },
    {
      id: 4,
      title: "Kidzee PreSchool Home Page Website",
      image: project7,
      liveLink: "https://kidzee-five.vercel.app/",
      codeLink: "https://github.com/amantomar1954/kidzee",
    },
    {
      id: 5,
      title: "Punjabi Jutti Store",
      image: project4,
      liveLink: "https://punjabijuttis.vercel.app/",
      codeLink: "https://github.com/amantomar1954/punjabijuttis",
    },
    {
      id: 6,
      title: "Reeltor CMS",
      image: project5,
      liveLink: "https://reeltor-cms.vercel.app/",
      codeLink: "https://github.com/amantomar1954/cmsofreeltor",
    },
    // {
    //   id: 7,
    //   title: "Reeltor Main Website",
    //   image: project6,
    //   liveLink: "https://www.reeltor.com/",
    //   codeLink: "https://github.com/your-repo",
    // },
  ];

  const [items, setItems] = useState([]);
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);

  useEffect(() => {
    if (inView) setViewDiv(true);
    else setViewDiv(false);

    // ✅ Show all projects
    setItems(Items);
  }, [inView]);

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="parent py-12">

        {/* ✅ Heading */}
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Some of my recent Projects
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        {/* ✅ Cards Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div className="three-card-grid">
            {items.map((item) => (
              <div
                key={item.id}
                className="project-card"
                style={{
                  backgroundImage: `url(${item.image})`, // ✅ FIXED HERE
                }}
              >
                <div className="card-overlay">
                  <h3 className="text-lg font-semibold text-primary text-center">
                    {item.title}
                  </h3>

                  <div className="flex gap-2 mt-3">

                    {/* ✅ View Live */}
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-sm bg-primary text-white hover:bg-transparent hover:border-primary border-2 duration-300">
                        View
                      </button>
                    </a>

                    {/* ✅ Source Code */}
                    <a
                      href={item.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-sm border-2 border-primary text-white hover:bg-primary duration-300">
                        Code
                      </button>
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;