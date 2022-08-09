import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// if (!API_URL) {
//   throw new Error("API URL not provided.");
// }

interface Response<TEntity> {
  message: string;
  status: 200 | 400 | 500;
  responseDateTime: string;
  entity: TEntity;
}

export interface EntityList<TEntity> {
  totalCount: number;
  items: TEntity[];
}

export async function fetcher<TEntity = any>(url: string) {
  // const response = await axios.get<Response<TEntity>>(API_URL + url, {});
  const response = await axios.get<Response<TEntity>>("" + url, {});

  return response;
}
