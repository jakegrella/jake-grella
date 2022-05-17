type Photo = {
  src: string;
  alt: string;
};

export type PhotoProject = {
  images: Photo[];
  title: string;
  date: string;
  description?: string;
};
