import axios from "axios";

async function GetDetailBook(slug: string): Promise<DetailBook> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/book/${slug}`
  );
  return response.data.data;

}

export default GetDetailBook