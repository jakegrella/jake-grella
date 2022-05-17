import { Link } from "react-router-dom";
import { PhotoProject } from "../../../types";
import { useStore } from "../../store/store";

export const PhotoCard = ({
  images,
  title,
  date,
  description,
}: PhotoProject) => {
  const slug = title.replace(/\s+/g, "-").toLowerCase();

  const updateCurrentPhotoProject = useStore(
    (state) => state.updateCurrentPhotoProject
  );

  const handleClick = () => {
    updateCurrentPhotoProject({ images, title, date, description });
  };

  return (
    <Link to={slug} onClick={handleClick} className="photoCard">
      <img src={images[0].src} alt={images[0].alt} />
      <h2>{title}</h2>
      <p>{date}</p>
    </Link>
  );
};
