export function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

export type StyledProps<TProps extends object> = TProps & {
  className?: string;
};
