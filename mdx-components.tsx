import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {

    // Add any custom components or overrides here
    ...components,

  };
}

