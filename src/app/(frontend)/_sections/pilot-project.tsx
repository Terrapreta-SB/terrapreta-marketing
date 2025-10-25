import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function PilotProject() {
  return (
    <div className="container-site flex items-center justify-center">
      <AspectRatio className="relative w-1/2" ratio={3 / 2}>
        <div className="absolute inset-0 h-full w-full bg-red-500">div</div>
      </AspectRatio>

      <div className="w-1/2">
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
