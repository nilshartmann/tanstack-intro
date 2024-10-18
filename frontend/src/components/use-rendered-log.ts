// evil 😈
import { useEffect } from "react";

import { addLogEvent } from "../event-store.ts";

export function useRenderedLog(name: string) {
  useEffect(() => {
    addLogEvent(name, "Rendered");
  });
}
