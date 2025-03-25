interface Books {
  id_book: number;
  title: string;
  author: string;
  image: string;
  isbn: string;
  price: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string;
  login: (accessToken: string) => void;
  logout: () => void;
}