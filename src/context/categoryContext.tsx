import { createContext, useState } from "react";

interface CategoryContextProps {
    category: Array<string>;
    changeCategory: (category: Array<string>) => void;
}

export const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps);

export const CategoryContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<Array<string>>([]);

  const changeCategory = (category: Array<string>) => {
    setCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
