import { PhotoProject as PhotoProjectType } from "../../../types";

export const PhotoProject = ({
  images,
  title,
  date,
  description,
}: PhotoProjectType) => (
  <div className="photoProject">
    <h2>{title}</h2>
    <h3 className="gray">{date}</h3>
    <p>{description}</p>
    {images.map((i) => (
      <img src={i.src} alt={i.alt} />
    ))}
  </div>
);
