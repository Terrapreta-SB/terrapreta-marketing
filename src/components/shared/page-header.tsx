import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  position?: "center" | "left";
  children?: React.ReactNode;
  };

export default function PageHeader({ title, description, position = "center", children }: PageHeaderProps) {
  return (
    <hgroup className={cn(
      "flex pt-15 pb-10 flex-col mt-17 gap-2.5 max-w-7xl mx-auto",
      position === "center" ? "items-center justify-center" : "items-start justify-start"
    )}>
      <h1 className="text-4xl">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </hgroup>
  );
}
