import ora, { Ora } from "ora";
import colors from "colors";
import { TC } from "./type";
import { proah } from "./config";

class Logger {
  private spinner: Ora;

  constructor() {
    this.spinner = ora({
      spinner: "dots",
      color: "yellow",
    });
  }

  start = (message: string) => {
    this.spinner.start(`  ${colors.bold("[LOADING]").red} : ${message}`);
  };

  info = (message: string) => {
    this.spinner.stopAndPersist({
      symbol: "",
      text: `ℹ️   ${colors.blue("[INFO]")}    : ${message}`,
    });
  };

  success = (message: string) => {
    this.spinner.stopAndPersist({
      symbol: "",
      text: `✅  ${colors.green("[SUCCESS]")} : ${message}`,
    });
  };

  warning = (message: string) => {
    this.spinner.stopAndPersist({
      symbol: "",
      text: `⚠️   ${colors.yellow("[WARNING]")} : ${message}`,
    });
  };

  error = (message: string) => {
    this.spinner.stopAndPersist({
      symbol: "",
      text: `❌  ${colors.red("[ERROR]")}   : ${message}`,
    });
  };

  appriciation = () => {
    this.spinner.stopAndPersist({
      symbol: "",
      text: `\n🎉 Dear friends! 🎉\nIf you found this helpful, a ⭐ STAR ⭐ would be ${colors.bold(
        "GREATLY APPRECIATED"
      )}! 🥰 \n━━\x1b]8;;https://github.com/NasaHack/make-public\x07🚀 ${colors.bold(
        "STAR ON GITHUB"
      )} 🚀\x1b]8;;\x07━━\n`,
    });
  };
}

export const logger = new Logger();

export const tc: TC = (handler, shouldLog) => {
  logger.start("Please wait...");
  return async (...rest) => {
    try {
      return await handler(...rest);
    } catch (error) {
      shouldLog &&
        logger.error(error instanceof Error ? error.message : "unknown error");
      return false;
    }
  };
};

export const network = tc<[string], any>(async (API_URL) => {
  let url = new URL(API_URL);

  const { error, data } = await proah.get("/", {
    query: {
      api_url: url.href,
    },
  });

  if (data) {
    const {
      message,
      data: { proxied_url },
    } = <{ message: string; data: { proxied_url: string } }>data;

    logger.success(message);
    logger.info(`Proxied URL: ${colors.bold(proxied_url).blue.bgYellow}`);
    logger.appriciation();
  } else {
    const { message } = <{ message: string }>error;
    logger.error(message);
  }
  process.exit(0);
}, true);
