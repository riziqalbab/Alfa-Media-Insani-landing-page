import { createContext, useState } from "react";

interface CategoryContextProps {
  category: Array<string>;
  search: string;
  changeCategory: (category: Array<string>) => void;
  setSearchValue: (category: string) => void;
}

export const FilterContext = createContext<CategoryContextProps>(
  {} as CategoryContextProps
);

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<Array<string>>([]);
  const [search, setSearch] = useState("");

  const changeCategory = (category: Array<string>) => {
    setCategory(category);
  };

  const setSearchValue = (search: string) => {
    setSearch(search);
  };

  return (
    <FilterContext.Provider
      value={{ category, search, setSearchValue, changeCategory }}
    >
      {children}
    </FilterContext.Provider>
  );
};
