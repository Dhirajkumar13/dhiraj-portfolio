import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Introduction } from "@/components/sections/Introduction";
import { Impact } from "@/components/sections/Impact";
import { Work } from "@/components/sections/Work";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { Leadership } from "@/components/sections/Leadership";
import { Timeline } from "@/components/sections/Timeline";
import { Recognition } from "@/components/sections/Recognition";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/common/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Introduction />
        <Impact />
        <Work />
        <ArchitectureSection />
        <Leadership />
        <Timeline />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
