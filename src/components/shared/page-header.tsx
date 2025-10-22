type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <hgroup className="flex py-20 flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </hgroup>
  );
}
