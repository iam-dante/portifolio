import { useEffect, useState } from "react";

type Painting = {
  title: string;
  artist: string;
  year: string;
  /** Exact file name on Wikimedia Commons, or on English Wikipedia when `wiki` is "en". */
  file: string;
  /**
   * "en": the file lives on English Wikipedia as a small fair-use copy
   * (Basquiat is still under copyright). Shown whole over a blurred backdrop
   * so the low-res image isn't cropped.
   */
  wiki?: "en";
};

const basquiat = (title: string, year: string, file: string): Painting => ({
  title,
  artist: "Jean-Michel Basquiat",
  year,
  file,
  wiki: "en",
});

const paintings: Painting[] = [
  basquiat("Untitled (Head)", "1981", "Untitled-Head-Jean-Michel_Basquiat-1981.jpg"),
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    file: "Van Gogh - Starry Night - Google Art Project.jpg",
  },
  basquiat("Hollywood Africans", "1983", "Hollywood-Africans-1983.jpg"),
  basquiat("Irony of Negro Policeman", "1981", "Basquiat-irony-of-negro-policeman-1981.jpg"),
  {
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "c. 1831",
    file: "Tsunami by hokusai 19th century.jpg",
  },
  {
    title: "The Ambassadors",
    artist: "Hans Holbein the Younger",
    year: "1533",
    file: "Hans Holbein the Younger - The Ambassadors - Google Art Project.jpg",
  },
  basquiat("Boy and Dog in a Johnnypump", "1982", "Boy-and-Dog-in-Johnnypump-1982.jpg"),
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    file: "1665 Girl with a Pearl Earring.jpg",
  },
  {
    title: "The Tower of Babel",
    artist: "Pieter Bruegel the Elder",
    year: "1563",
    file: "Pieter Bruegel the Elder - The Tower of Babel (Vienna) - Google Art Project - edited.jpg",
  },
  {
    title: "Plan of Imola",
    artist: "Leonardo da Vinci",
    year: "1502",
    file: "Leonardo da Vinci - Plan of Imola - Google Art Project.jpg",
  },
  {
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    year: "1818",
    file: "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
  },
  {
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    file: "Claude Monet, Impression, soleil levant.jpg",
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1908",
    file: "Gustav Klimt 016.jpg",
  },
];

const src = ({ file, wiki }: Painting) => {
  const name = encodeURIComponent(file.replace(/ /g, "_"));
  return wiki === "en"
    ? `https://en.wikipedia.org/wiki/Special:FilePath/${name}`
    : `https://commons.wikimedia.org/wiki/Special:FilePath/${name}?width=1000`;
};

const INTERVAL_MS = 6000;

export function PaintingSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (paused || reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % paintings.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (step: number) =>
    setIndex((i) => (i + step + paintings.length) % paintings.length);

  const current = paintings[index];

  return (
    <figure
      className="mt-6 sm:mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Paintings I love"
    >
      <div>
        <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-xl sm:aspect-square">
          {paintings.map((p, i) => (
            <div
              key={p.file}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {p.wiki === "en" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src(p)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-75"
                />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src(p)}
                alt={`${p.title} by ${p.artist}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`absolute inset-0 h-full w-full ${
                  p.wiki === "en" ? "object-contain p-6 drop-shadow-2xl" : "object-cover"
                }`}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous painting"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-100 backdrop-blur-sm transition-opacity hover:bg-black/55 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next painting"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-100 backdrop-blur-sm transition-opacity hover:bg-black/55 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
          >
            <span aria-hidden>›</span>
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {paintings.map((p, i) => (
              <button
                key={p.file}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${p.title}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <figcaption
        className="mt-3 text-sm leading-6 text-subtle"
        aria-live="polite"
      >
        <span className="italic text-muted-foreground">{current.title}</span>
        {" · "}
        {current.artist}, {current.year}
      </figcaption>
    </figure>
  );
}
