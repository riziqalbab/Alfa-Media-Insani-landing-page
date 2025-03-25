"use client"

import { AuthContextProvider } from '@/context/AuthContext';
import { ClientAuthProvider } from '@/context/ClientAuthProvider';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
      
    </div>
  );
}