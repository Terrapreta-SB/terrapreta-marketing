import { Button } from "@/components/ui/button";

type NumberCardProps = {
  title: string;
  description: string;
};

function NumberCard({ title, description }: NumberCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-lg p-5 bg-stone-900 aspect-square">
      <h3 className="text-3xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default function Numbers() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 gap-10 flex items-start">
      <div className="flex flex-col justify-between gap-5 h-full w-1/2">
        <h2 className="text-3xl">Speaking with Numbers</h2>
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
        <div className="flex bg-stone-900 px-5 py-2.5 rounded-lg flex-col gap-2">
          <h3 className="text-lg ">Numbers in the EU</h3>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full">
          <NumberCard
            title="3 million"
            description="The number of contaminated sites to be recoverd"
          />
          <NumberCard
            title="Over 60%"
            description="Percentage of soils degraded and in bad health"
          />
          <NumberCard
            title="€50 bn/year"
            description="Spent to make up for the loss of vital benefits from soil degradation"
          />
          <NumberCard
            title="€18 bn/year"
            description="2030 fast growing market of NbS, the most cost-effective solutions to face climate change"
          />
        </div>
      </div>
    </div>
  );
}
