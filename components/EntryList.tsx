import Link from "next/link";
import type { Entry } from "../lib/site";

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function EntryTitle({
  title,
  href,
  color,
}: {
  title: string;
  href?: string;
  color?: string;
}) {
  const base = `font-serif text-xl font-semibold leading-8 ${
    color ?? "text-foreground"
  }`;
  const className = `${base} underline decoration-transparent underline-offset-[3px] transition-colors hover:decoration-current`;

  if (!href) {
    return <span className={base}>{title}</span>;
  }

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}

export function EntryItem({ entry }: { entry: Entry }) {
  return (
    <article className="mt-10 first:mt-8">
      <EntryTitle title={entry.title} href={entry.href} color={entry.color} />
      <p className="mt-2 text-[17px] leading-7 text-muted-foreground text-pretty">
        {entry.description}
      </p>
      {entry.links ? (
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px] font-medium leading-6">
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-foreground"
            >
              {link.label}
            </a>
          ))}
        </p>
      ) : null}
      <p className="mt-2 text-sm leading-6 text-subtle">
        {entry.date}
        {entry.context ? (
          <>
            <span className="mx-1 text-faint">·</span>
            <span className="text-muted-foreground">{entry.context}</span>
          </>
        ) : null}
      </p>
    </article>
  );
}

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div>
      {entries.map((entry) => (
        <EntryItem key={entry.title} entry={entry} />
      ))}
    </div>
  );
}

