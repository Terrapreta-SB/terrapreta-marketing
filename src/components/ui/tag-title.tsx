type TagTitleProps = {
  title: string;
  tag: string;
};

export default function TagTitle({ tag, title }: TagTitleProps) {
  return (
    <span className="flex flex-col items-start gap-5">
      <span className="boreder-stone-700 flex items-center justify-center gap-1.5 rounded-xl border bg-linear-to-t from-stone-600 to-stone-700 px-2.5 py-1 font-mono text-xs">
        <div className="size-1.5 rounded-full bg-stone-100" />
        {tag}
      </span>
      <h2 className="font-bold text-4xl">{title}</h2>
    </span>
  );
}
