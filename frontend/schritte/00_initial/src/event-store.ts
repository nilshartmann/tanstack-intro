export type LogEvent = {
  id: string;
  timestamp: number;
  origin: string;
  message: string;
};

export function isLogEvent(e: Event): e is CustomEvent<LogEvent> {
  return e.type === "logEvent"; //  instanceof CustomEvent && "message" in e.detail && "id" in e.detail;
}

export function addLogEvent(origin: string, message: string) {
  const timestamp = Date.now();
  const e = new CustomEvent<LogEvent>("logEvent", {
    detail: { timestamp, origin, message, id: crypto.randomUUID() },
  });

  document.dispatchEvent(e);
}
