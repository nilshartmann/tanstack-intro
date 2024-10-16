// evil 😈
import { useEffect } from "react";

import { addLogEvent } from "../event-store.ts";

const enabled = false;

export function useRenderedLog(name: string) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    addLogEvent(name, "Rendered");
  });
}
