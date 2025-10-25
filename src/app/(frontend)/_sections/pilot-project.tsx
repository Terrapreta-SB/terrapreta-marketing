import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function PilotProject() {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center bg-green-800 py-20">
      <AspectRatio>
        {/*  <Image alt="Pilot Project" src={pilotProjectImage} /> */}
      </AspectRatio>

      <div>
        <hgroup className="">
          <h2 className="text-3xl">Osservatorio La Goccia</h2>
          <p>Il nostro progetto pilota</p>
        </hgroup>
        <div>
          <p>
            Osservatorio La Goccia è un laboratorio a cielo aperto che mira a
            validare soluzioni innovative di biorisanamento per rigenerare i
            suoli delle ex Officine del Gas della Bovisa, tutelando la
            biodiversità e potenziando i benefici ecosistemici forniti dal bosco
            spontaneo che vi è cresciuto sopra in diversi decenni di abbandono.
          </p>
          <p>
            L’Osservatorio nasce dalla sottoscrizione di un patto di
            collaborazione tra Terrapreta, Comune di Milano, Museo Civico di
            Storia Naturale, CNR-Iret, CFU-Italia Nostra e Progetto Natura
            Onlus.
          </p>
        </div>
        <Button>Explore the Pilot Project</Button>
      </div>
    </div>
  );
}
