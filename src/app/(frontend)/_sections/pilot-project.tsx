import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PilotProject() {
  return (
    <div className="container-site flex h-full items-center justify-center gap-5">
      <div className="relative h-[50vh] w-1/2 rounded border border-stone-700">
        <Image
          alt="Why? Our Soil needs help."
          className="h-full w-full rounded object-cover object-center"
          fill
          quality={75}
          src="https://cdn.sanity.io/images/wj2okvbq/production/bf5359dbaaabe2a723a66fd982db42a7196a52af-2400x1600.webp"
        />
      </div>

      <div className="h-full w-1/2">
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
