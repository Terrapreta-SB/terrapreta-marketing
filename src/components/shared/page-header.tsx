import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  position?: "center" | "left";
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  position = "center",
  children,
}: PageHeaderProps) {
  return (
    <hgroup
      className={cn(
        "container-site mx-auto mt-17 flex flex-col gap-2.5 pt-15 pb-10",
        position === "center"
          ? "items-center justify-center"
          : "items-start justify-start"
      )}
    >
      <h1 className="text-4xl">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </hgroup>
  );
}
