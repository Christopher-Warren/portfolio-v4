import { useEffect, useRef } from "react";
import ImageCarousel from "../ImageCarousel";

interface Props {
  selectedProject: ProjectType;
  setSelectedProject: any;
}

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ProjectType } from "../../@types/Projects";

const ImageViewer: React.FC<Props> = ({
  selectedProject,
  setSelectedProject,
}) => {
  const isClosing = useRef(false);

  useEffect(() => {
    selectedProject.images && (document.body.style.overflow = "hidden");

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [selectedProject.images]);

  return (
    <div
      onMouseDown={(e: any) => {
        if (e.target.localName === "div") {
          isClosing.current = true;
        } else {
          isClosing.current = false;
        }
      }}
      onClick={(e: any) => {
        if (e.target.localName === "div" && isClosing.current) {
          setSelectedProject(null);
        }
      }}
      className={`${
        selectedProject.images ? "block" : "hidden"
      } fixed top-0 left-0 z-50 h-screen w-screen overflow-hidden bg-neutral-900/50 backdrop-blur`}
    >
      <div className="relative mx-auto h-full w-full max-w-7xl ">
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-0 right-0 z-10 m-5 p-2 text-xl text-neutral-200 transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white
          "
        >
          <Icon icon={faX} />
        </button>

        <ImageCarousel project={selectedProject} />
      </div>
    </div>
  );
};
export default ImageViewer;
