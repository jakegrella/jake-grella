import { Link } from "react-router-dom";
import { PhotoCollection } from "../../../types";

export const PhotoCard = ({ images, title, date }: PhotoCollection) => (
  <Link to=":photoCollection" className="photoCard">
    <img src={images[0].src} alt={images[0].alt} />
    <p>{title}</p>
    <p>{date}</p>
  </Link>
);
