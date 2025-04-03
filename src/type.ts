export type TC = <T extends any[], R>(
  handler: (...rest: T) => Promise<any>,
  shouldLog?: boolean
) => (...rest: T) => Promise<R | undefined>;
