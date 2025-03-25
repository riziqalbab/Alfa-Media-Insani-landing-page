import { AuthContextProvider } from "@/context/AuthContext";

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    );
}

export default AdminLayout;