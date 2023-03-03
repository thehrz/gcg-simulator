export const getIcon = (id: string) => {
  return new URL(`../images/icons/${id}.png`, import.meta.url).href
}
