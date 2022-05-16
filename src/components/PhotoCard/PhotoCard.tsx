import { Link } from "react-router-dom";

export const PhotoCard = ({
  imgSrc,
  imgAlt,
  title,
  date,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
}) => (
  <Link to="/" className="photoCard">
    <img src={imgSrc} alt={imgAlt} />
    <p>{title}</p>
    <p>{date}</p>
  </Link>
);
