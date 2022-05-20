type Photo = {
  src: string;
  alt: string;
};

export type PhotoProject = {
  id: number;
  images: Photo[];
  title: string;
  date: string;
  description?: string;
};
