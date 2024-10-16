import { useEffect, useState } from "react";

import { isLogEvent, LogEvent } from "./event-store.ts";

export default function SimpleDevTool() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<LogEvent[]>([]);

  useEffect(() => {
    document.addEventListener("logEvent", function (event) {
      if (isLogEvent(event)) {
        setMessages((m) => [...m, event.detail]);
      }
    });
  }, []);

  if (!visible) {
    return (
      <button
        className={
          "absolute left-0 top-0 w-[25px] cursor-pointer rounded bg-violet-100 p-2"
        }
        onClick={() => setVisible(true)}
      >
        🕵️‍♀️
      </button>
    );
  }

  return (
    <div
      className={
        "absolute left-0 top-0 w-[250px] space-y-2 rounded bg-violet-100 p-2"
      }
    >
      <div className={"flex items-center justify-between space-x-4"}>
        <button
          className={"w-[25px] cursor-pointer rounded bg-violet-100 p-2"}
          onClick={() => setVisible(false)}
        >
          X️
        </button>
        <div className={"font-medium"}>Events</div>
        <button
          onClick={() => setMessages([])}
          className={
            "rounded bg-violet-300 px-2 py-1 text-sm hover:bg-violet-500"
          }
        >
          Clear
        </button>
      </div>

      {messages.map((m) => (
        <div
          key={m.id}
          className={"flex-col space-y-1 rounded bg-violet-300 p-2"}
        >
          <div className={"text-sm"}>{formatTimestamp(m.timestamp)}</div>
          <div className={"flex justify-between"}>
            <span className={"font-medium"}>{m.origin}</span> {m.message}
          </div>
        </div>
      ))}
    </div>
  );
}

function formatTimestamp(timeStamp: number) {
  const date = new Date(timeStamp);

  // Extract minutes, seconds, and milliseconds
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

  return `${minutes}:${seconds}.${milliseconds}`;
}
