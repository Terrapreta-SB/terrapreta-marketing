import ContactForm from "@/components/shared/contact-form";
import Clients from "./_sections/clients";
import Context from "./_sections/context";
import HomeHero from "./_sections/home-hero";
import Logos from "./_sections/logos";
import Numbers2 from "./_sections/numbers2";
import PilotProject from "./_sections/pilot-project";
import Services from "./_sections/services";
import SoilRevolution from "./_sections/soil-revolution";

const sectionSpacing = "space-y-60";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="space-y-30">
        <div className={`${sectionSpacing} pt-10`}>
          <Numbers2 />
        </div>
        <div
          className={`${sectionSpacing} bg-linear-to-b from-stone-900 to-transparent py-30`}
        >
          <SoilRevolution />
        </div>
        <div
          className={`${sectionSpacing} bg-linear-to-b from-stone-900 to-transparent py-30`}
        >
          <Services />
        </div>
        <div
          className={`${sectionSpacing} bg-linear-to-b from-stone-900 to-transparent py-30`}
        >
          <Clients />
        </div>
        <div
          className={`${sectionSpacing} bg-linear-to-b from-stone-900 to-transparent py-30`}
        >
          <PilotProject />
        </div>
        <Context />
        <div
          className={`${sectionSpacing} bg-linear-to-b from-stone-900 to-transparent py-30`}
        >
          <Logos />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
