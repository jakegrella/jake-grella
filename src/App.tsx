/* eslint-disable react/jsx-no-comment-textnodes */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Code, Home, Layout, NotFound, Photo } from "./components";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="code" element={<Code />} />
          <Route path="photo" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
