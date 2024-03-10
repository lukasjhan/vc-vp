import React from "react";
import { Badge } from "@/components/ui/badge";

export const Skip = ({ setStep }: { setStep: (state: string) => void }) => {
  return (
    <>
      <div className="flex justify-end">
        <Badge
          variant="secondary"
          className="cursor-pointer p-2 mt-8"
          onClick={() => setStep("holder")}
        >
          ➔ You Can Skip it!
        </Badge>
      </div>

      <br />
    </>
  );
};
