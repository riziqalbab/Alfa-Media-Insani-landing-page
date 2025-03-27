import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface DataContextProps {
  category: Array<Category>;
  books: Array<Books>;

}

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<Array<Category>>([]);
  const [books, setBooks] = useState<Array<Books>>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category`).then((response) => {
        setCategory(response.data.data)
    })

}, [])
  return (
    <DataContext.Provider
      value={{ category, books  }}
    >
      {children}
    </DataContext.Provider>
  );
};


export const useDataContext = () => {
  return useContext(DataContext);
};
