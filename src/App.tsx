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

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code" element={<Code />} />
          <Route path="photo" element={<Photo />}>
            <Route
              path="photo/:photoCollection"
              element={
                <PhotoProject
                  images={[]}
                  title="test title"
                  date="test date"
                  description="test description"
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
