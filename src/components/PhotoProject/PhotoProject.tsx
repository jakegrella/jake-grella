import { PhotoCollection } from "../../../types";

export const PhotoProject = ({
  images,
  title,
  date,
  description,
}: PhotoCollection) => (
  <div>
    <p>{title}</p>
    <p>{date}</p>
    <p>{description}</p>
    {images.map((i) => (
      <img src={i.src} alt={i.alt} />
    ))}
  </div>
);
