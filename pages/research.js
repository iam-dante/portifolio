import ThoughtsLayout from "../components/ThoughtsLayout";

export default function Research() {
  return (
    <ThoughtsLayout meta={{ title: "Research" }}>
      <header className="text-center mb-16">
        <h1 className="text-4xl font-medium text-stone-800 font-dsans tracking-tight">
          Research
        </h1>
      </header>

      <p className="text-center text-stone-500 font-dsans leading-relaxed">
        Research is on the way.
      </p>
    </ThoughtsLayout>
  );
}
