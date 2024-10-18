export type LogEvent = {
  id: string;
  timestamp: number;
  origin: string;
  message: string;
};

export type LogEventType = "Rendered" | "beforeLoad";

export const enabledLogEvents: LogEventType[] = [];

export function isLogEvent(e: Event): e is CustomEvent<LogEvent> {
  return e.type === "logEvent"; //  instanceof CustomEvent && "message" in e.detail && "id" in e.detail;
}

export function addLogEvent(origin: string, event: LogEventType) {
  if (!enabledLogEvents.includes(event)) {
    return;
  }
  const timestamp = Date.now();
  const e = new CustomEvent<LogEvent>("logEvent", {
    detail: { timestamp, origin, message: event, id: crypto.randomUUID() },
  });

  document.dispatchEvent(e);
}
