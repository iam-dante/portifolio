import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav, site, socials } from "../lib/site";
import { ThemeToggle } from "./ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  /** Widens the column for long-form reading. */
  wide?: boolean;
};

export function Layout({ children, title, description, wide }: LayoutProps) {
  const { pathname } = useRouter();
  const pageTitle = title ? `${title} | ${site.name}` : site.name;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description ?? site.description} />
        <meta name="author" content={site.name} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={description ?? site.description}
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="page-shell">
        <div
          className={`site-container flex-1 pb-16 pt-8 sm:pt-12 ${
            wide ? "max-w-2xl" : ""
          }`}
        >
          <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <Link
              href="/"
              className="whitespace-nowrap font-serif text-lg font-semibold text-foreground transition-colors hover:text-muted-foreground"
            >
              {site.name}
            </Link>

            <div className="flex items-center gap-4 sm:gap-5">
              <nav className="flex items-center gap-3.5 text-[15px] font-medium sm:gap-5 sm:text-base">
                {nav.map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`underline underline-offset-4 transition-colors hover:text-foreground hover:decoration-current ${
                        active
                          ? "text-foreground decoration-current"
                          : "text-muted-foreground decoration-[var(--faint)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <ThemeToggle />
            </div>
          </header>

          <main>{children}</main>
        </div>

        <footer className={`site-container pb-10 ${wide ? "max-w-2xl" : ""}`}>
          <div className="flex flex-col items-center gap-3 border-t border-[var(--border)] pt-6 text-sm leading-6 text-subtle">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {[
                { label: "resume", href: socials.resume },
                { label: "github", href: socials.github },
                { label: "x", href: socials.x },
                { label: "linkedin", href: socials.linkedin },
                { label: "chess", href: socials.chess },
                { label: "zindi", href: socials.zindi },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

/** Page heading with the small sans subtitle used across section pages. */
export function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mt-12 sm:mt-16">
      <h1 className="font-serif text-[26px] font-semibold leading-tight text-foreground sm:text-[28px]">
        {title}
      </h1>
      <p className="mt-2 text-base leading-7 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
