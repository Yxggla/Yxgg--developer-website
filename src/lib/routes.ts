export function getCleanPath(path: string): string {
  const [pathname] = path.split(/[?#]/);
  return pathname && pathname !== "" ? pathname : "/";
}
