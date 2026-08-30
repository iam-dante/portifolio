import { EntryList } from "../components/EntryList";
import { Layout, PageHeading } from "../components/Layout";
import { projects } from "../lib/site";

export default function Engineering() {
  return (
    <Layout
      title="Engineering"
      description="Projects built by Brian Temu."
    >
      <PageHeading title="Engineering" subtitle="Projects" />
      <EntryList entries={projects} />
    </Layout>
  );
}
