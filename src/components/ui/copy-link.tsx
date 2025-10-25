"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type CopyLinkButtonProps = {
  className?: string;
};

export function CopyLink({ className }: CopyLinkButtonProps) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <Button className={className} onClick={handleCopyLink} variant="link">
      Copy link
    </Button>
  );
}
