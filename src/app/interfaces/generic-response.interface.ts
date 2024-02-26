export interface GenericResponse<T> {
  data: {
    [key: string]: T;
  };
}

interface Continent {
  name: string;
  code: string;
}
