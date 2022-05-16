import { PhotoCard } from "./PhotoCard/PhotoCard";
import { data } from "../fakeDb";

/* eslint-disable react/jsx-no-comment-textnodes */
export const Photo = () => (
  <div className="content">
    <section className="gray">
      <p>
        //{" "}
        <a
          href="https://twitter.com/jakegrella"
          target="_blank"
          rel="noreferrer"
        >
          @jakegrella
        </a>
        ,{" "}
        <a href="mailto:jake@jakegrella.com" target="_blank" rel="noreferrer">
          jake@jakegrella.com
        </a>
      </p>
      <p>
        //{" "}
        <a
          href="https://instagram.com/jakegrella"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        ,{" "}
        <a
          href="https://unsplash.com/@jakegrella"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    </section>
    <section>
      <h2>About</h2>
      <p>
        I'm a real estate and architecture photographer based in the midwest but
        love the west coast. My goal when I create photos is to establish
        context and capture properties in a way that tells their stories.
      </p>
    </section>
    <section>
      <h2>Projects</h2>
      {data.map((e) => (
        <PhotoCard
          imgSrc={e.imgSrc}
          imgAlt={e.imgAlt}
          title={e.title}
          date={e.date}
        />
      ))}
    </section>
  </div>
);
