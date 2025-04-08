"use client"

import { AuthContextProvider } from '@/context/AuthContext';
import { DataContextProvider } from '@/context/DataContext';

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <AuthContextProvider>
        <DataContextProvider>
          {children}
        </DataContextProvider>
      </AuthContextProvider>
    </div>
  );
}