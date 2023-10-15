import { API_URL } from "../urls";

export const myLoader = (src: string) => {
  return `${API_URL}${src}`;
};
