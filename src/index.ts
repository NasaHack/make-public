import { network, logger } from "./utils";

const API_URL: string = process.argv[2];

const init = () => {
  if (!API_URL) return logger.error("Api URL is required");
  network(API_URL.trim());
};

init();
