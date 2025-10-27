import TagTitle from "@/components/ui/tag-title";

export default function Clients() {
  return (
    <div
      className="container-site flex flex-col items-start gap-10"
      id="soil-revolution"
    >
      <hgroup className="flex h-full flex-col justify-between gap-2">
        <TagTitle tag="Clients" title="--type of clients we work with--" />
        <p className="w-1/2 text-stone-300 text-xl">abc</p>
      </hgroup>
      <div className="grid w-full grid-cols-3 gap-5">
        <div className="flex flex-col gap-2.5">adsd</div>
        <div className="flex flex-col gap-2.5">adsdasdasd</div>
      </div>
    </div>
  );
}
