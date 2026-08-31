import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** ESLint 9 flat config. Replaces the old .eslintrc.json. */
const config = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
];

export default config;
