export function match(param: string): boolean {
  return /^[A-Za-z0-9]+$/u.test(param);
}
