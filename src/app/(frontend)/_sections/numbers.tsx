import { Button } from "@/components/ui/button";

type NumberCardProps = {
  title: string;
  description: string;
};

function NumberCard({ title, description }: NumberCardProps) {
  return (
    <div className="flex aspect-square flex-col justify-between gap-5 rounded-lg border border-stone-800 bg-linear-to-b from-stone-900 to-transparent p-5">
      <h3 className="text-3xl">{title}</h3>
      <p className="line-clamp-3 h-[4.5rem] text-xl leading-6">{description}</p>
    </div>
  );
}
export default function Numbers() {
  return (
    <div className="container-site flex items-start gap-10">
      <div className="flex h-full w-1/2 flex-col justify-between gap-5">
        <h2 className="text-3xl">Our Soil in Numbers</h2>
        <div className="flex flex-col gap-5">
          <p>
            Voluptate in quibusdam fugit veritatis non praesentium doloremque
            laboriosam ut ad nam aut non. Ut iusto aut consequuntur quod.
            Molestiae delectus voluptatibus corrupti nemo. Quis et error
            sapiente quos iure aut.
          </p>
          <Button className="w-fit">Learn More</Button>
        </div>
      </div>

      <div className="flex w-1/2 flex-col gap-5">
        <div className="flex flex-col gap-2 rounded-lg border border-stone-800 bg-linear-to-r from-stone-900 to-transparent px-5 py-2.5">
          <h3 className="text-lg">Numbers in the EU</h3>
        </div>
        <div className="grid w-full grid-cols-2 gap-5">
          <NumberCard
            description="The number of contaminated sites to be recoverd"
            title="3 million"
          />
          <NumberCard
            description="Percentage of soils degraded and in bad health"
            title="Over 60%"
          />
          <NumberCard
            description="Spent to make up for the loss of vital benefits from soil degradation"
            title="€50 bn/year"
          />
          <NumberCard
            description="2030 fast growing market of NbS, the most cost-effective solutions to face climate change"
            title="€18 bn/year"
          />
        </div>
      </div>
    </div>
  );
}
