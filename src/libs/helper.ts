export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const trimAddress = (str) =>
  (str.slice(0, 6) + "..." + str.slice(-4)).toLocaleUpperCase();
