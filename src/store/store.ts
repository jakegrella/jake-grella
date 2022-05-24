import create from "zustand";
import { PhotoProject } from "../../types";

interface State {
  currentPhotoProject: PhotoProject;
  updateCurrentPhotoProject: (i: PhotoProject) => void;
}

export const useStore = create<State>((set) => ({
  currentPhotoProject: {
    id: 0,
    images: [],
    title: "",
    date: "",
    description: "",
  },
  updateCurrentPhotoProject: (i: PhotoProject) =>
    set(() => ({ currentPhotoProject: i })),
}));
