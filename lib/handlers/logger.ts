import pino from "pino";

const isEdge = process.env.NEXT_RUNTIME === "edge";
const isPrduction = process.env.NODE_ENV === "production";
const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport:
    !isEdge && !isPrduction
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            ignore: "paid, hostname",
            translateTime: "SYS:standard",
          },
        }
      : undefined,
  formatters: {
    level: (label) => ({ label: label.toUpperCase() }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
