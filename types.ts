type Photo = {
  src: string;
  alt: string;
};

export type PhotoCollection = {
  images: Photo[];
  title: string;
  date: string;
  description?: string;
};
