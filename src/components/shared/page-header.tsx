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
        "container-site mx-auto mt-40 flex starting:translate-y-2 translate-y-0 flex-col gap-2.5 pb-10 opacity-100 starting:opacity-0 transition-all duration-300",
        position === "center"
          ? "items-center justify-center"
          : "items-start justify-start"
      )}
    >
      <h1 className="font-bold text-4xl">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </hgroup>
  );
}
