import { useEffect, useState } from "react";

type Painting = {
  title: string;
  artist: string;
  year: string;
  /** Exact file name on Wikimedia Commons (all public domain). */
  file: string;
};

const paintings: Painting[] = [
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    file: "Van Gogh - Starry Night - Google Art Project.jpg",
  },
  {
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "c. 1831",
    file: "Tsunami by hokusai 19th century.jpg",
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    file: "1665 Girl with a Pearl Earring.jpg",
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
    title: "The Milkmaid",
    artist: "Johannes Vermeer",
    year: "c. 1658",
    file: "Johannes Vermeer - Het melkmeisje - Google Art Project.jpg",
  },
  {
    title: "Woman with a Parasol",
    artist: "Claude Monet",
    year: "1875",
    file: "Claude Monet - Woman with a Parasol - Madame Monet and Her Son - Google Art Project.jpg",
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1908",
    file: "Gustav Klimt 016.jpg",
  },
];

const src = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    file.replace(/ /g, "_")
  )}?width=1000`;

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
      className="mt-6 flex flex-col sm:mt-8 sm:min-h-[120px] sm:flex-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Paintings I love"
    >
      <div className="sm:flex sm:min-h-0 sm:flex-1">
        <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-xl sm:aspect-square sm:h-full sm:max-h-[528px] sm:w-auto sm:max-w-full">
          {paintings.map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.file}
              src={src(p.file)}
              alt={`${p.title} by ${p.artist}`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              aria-hidden={i !== index}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
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
