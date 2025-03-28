interface Books {
  id_book: number;
  title: string;
  author: string;
  image: string;
  isbn: string;
  price: string;
}

interface AuthContextType {
  isLoggedIn: boolean | null;
  accessToken: string;
  login: (accessToken: string) => void;
  logout: () => void;
}

interface Category {
  CategoryID: number;
  Title: string;
  Slug: string;
}

interface Book {
  id_book: number;
  isbn: string;
  author: string;
  title: string;
  price: string;
  image: string;
  description: string;
  publish_year: number;
  publisher: string;
  category: Category;
}

interface ImageSliderType {
  ID: number;
  description: string;
  image: string;
}

interface CompanyType {
  Name: string;
  About: string;
  Visi: string;
  Misi: string;
  Address: string;
  Website: string;
  Phone: string;
  Email: string;
  Logo: string;
}


interface CompanyContextType{
  company: CompanyType | null;
  setCompany: (company: CompanyType) => void;
}

interface DetailBook {
  id_book: number;
  title: string;
  author: string;
  image: string;
  isbn: string;
  price: string;
  description: string;
  publish_year: number;
  publisher: string;
  category: {
    CategoryID: number;
    Title: string;
    Slug: string;
  };
}