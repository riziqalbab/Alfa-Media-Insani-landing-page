import axios from "axios";

export default async function GetRecomendationBooks(): Promise<Books[]> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/books/recommendations`
  );

  return response.data.data;
}
