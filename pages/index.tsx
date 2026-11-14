import Image from "next/image";
import { Layout } from "../components/Layout";
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

      <figure className="mt-6 flex min-h-[80px] flex-1 sm:mt-8">
        <div className="relative aspect-square h-full max-h-[528px] max-w-full overflow-hidden rounded-2xl bg-muted shadow-xl">
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

      <p className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-[15px] sm:gap-x-6 sm:text-[17px] font-medium leading-7">
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
