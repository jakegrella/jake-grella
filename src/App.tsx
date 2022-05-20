/* eslint-disable react/jsx-no-comment-textnodes */
import { Route, Routes } from "react-router-dom";
import {
  Code,
  Home,
  Layout,
  NotFound,
  Photo,
  PhotoProject,
} from "./components";
import "./main.scss";
import { useStore } from "./store/store";

function App() {
  const currentPhotoProject = useStore((state) => state.currentPhotoProject);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code" element={<Code />} />
          <Route path="photo" element={<Photo />} />
          <Route
            path="photo/:slug"
            element={
              <PhotoProject
                id={currentPhotoProject.id}
                images={currentPhotoProject.images}
                title={currentPhotoProject.title}
                date={currentPhotoProject.date}
                description={currentPhotoProject.description}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
