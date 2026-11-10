import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
