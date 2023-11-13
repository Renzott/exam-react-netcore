import es_PE from "./es_PE.json"

type Labels = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
export const getLabel = (key: string) => {
  const keys = key.split(".");
  
  let labels: Labels = es_PE;
  keys.forEach((k) => {
    labels = labels[k];
  });

  return labels ? String(labels) : key;
};