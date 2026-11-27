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
        I&apos;m an engineer who is curious about how things work. I like
        taking ideas apart, tinkering with them, and building something new
        out of the pieces.
      </p>

      <p className="mt-5 text-[17px] leading-7 sm:mt-6 sm:text-[19px] sm:leading-8 text-muted-foreground text-pretty">
        I&apos;m in Colorado, doing a PhD in Computer Science at the University
        of Colorado Denver. In my free time I study art, watch anime, and
        wander through paintings like the ones below.
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
