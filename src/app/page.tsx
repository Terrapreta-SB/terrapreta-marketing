import {
  HomeHero,
  Logos,
  Numbers,
  OurClients,
  PilotProject,
  SoilRevolution,
  WhatWeDo,
} from "./_sections";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <SoilRevolution />
      <Numbers />
      <WhatWeDo />
      <OurClients />
      <PilotProject />
      <Logos />
    </div>
  );
}
