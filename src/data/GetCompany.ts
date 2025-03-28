import axios from "axios";

export default async function GetCompany(): Promise<CompanyType> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/company`
  );

  return response.data.data;
}
