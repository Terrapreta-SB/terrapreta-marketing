import Clients from "./_sections/clients";
import HomeHero from "./_sections/home-hero";
import Logos from "./_sections/logos";
import Numbers from "./_sections/numbers";

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
          <SoilRevolution />
          <Numbers />
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
        <div
          className={`${sectionSpacing} bg-linear-to-b from-stone-900 to-transparent py-30`}
        >
          <Logos />
        </div>
      </div>
    </>
  );
}
