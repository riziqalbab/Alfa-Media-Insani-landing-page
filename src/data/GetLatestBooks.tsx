import axios from "axios"

export default async function GetLatestBooks(): Promise<Books[]> {
  
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/books/latest`)
  
    return response.data.data
  }