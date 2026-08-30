import Image from "next/image";
import { Layout } from "../components/Layout";
import { socials } from "../lib/site";

const contacts = [
  { label: "GitHub", href: socials.github },
  { label: "X", href: socials.x },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Chess.com", href: socials.chess },
  { label: "Zindi", href: socials.zindi },
];

export default function Home() {
  return (
    <Layout>
      <p className="mt-12 text-[19px] leading-8 text-muted-foreground text-pretty sm:mt-14">
        I&apos;m a curious Software and Machine Learning Engineer by practice
        with a strong foundation in development. I love learning new ideas and
        applying statistical models and ML techniques to build practical,
        impactful projects.
      </p>

      <p className="mt-6 text-[19px] leading-8 text-muted-foreground text-pretty">
        I&apos;m in Colorado, doing a PhD at the University of Colorado Denver.
      </p>

      <figure className="mt-10">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-xl">
          <Image
            src="/me.jpg"
            alt="Brian Temu"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 528px"
            className="object-cover"
          />
        </div>
      </figure>

      <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[17px] font-medium leading-7">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-foreground"
          >
            {contact.label}
          </a>
        ))}
      </p>
    </Layout>
  );
}
