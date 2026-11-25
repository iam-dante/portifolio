import { Layout } from "../components/Layout";
import { PaintingSlideshow } from "../components/PaintingSlideshow";
import { socials } from "../lib/site";

const contacts = [
  { label: "Resume", href: socials.resume },
  { label: "GitHub", href: socials.github },
  { label: "X", href: socials.x },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Chess.com", href: socials.chess },
  { label: "Zindi", href: socials.zindi },
];

export default function Home() {
  return (
    <Layout fit>
      <p className="mt-8 text-[17px] leading-7 text-muted-foreground text-pretty sm:mt-10 sm:text-[19px] sm:leading-8">
        I&apos;m a curious Software and Machine Learning Engineer by practice
        with a strong foundation in development. I love learning new ideas and
        applying statistical models and ML techniques to build practical,
        impactful projects.
      </p>

      <p className="mt-5 text-[17px] leading-7 sm:mt-6 sm:text-[19px] sm:leading-8 text-muted-foreground text-pretty">
        I&apos;m in Colorado, doing a PhD at the University of Colorado Denver.
      </p>

      <PaintingSlideshow />

      <p className="mt-8 flex flex-nowrap gap-x-3 whitespace-nowrap text-[12px] leading-5 sm:mt-6 sm:gap-x-4 sm:text-[13px]">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="text-subtle transition-colors hover:text-foreground"
          >
            {contact.label}
          </a>
        ))}
      </p>
    </Layout>
  );
}
