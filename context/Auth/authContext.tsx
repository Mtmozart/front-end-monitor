import React, { ReactNode } from 'react';
import { IAuthProvider, IContextProvider, IUser } from './auth.interface';


const AuthContext = React.createContext<IAuthProvider | undefined>(undefined);

export function AuthProvider({ children }: IContextProvider) {
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ currentUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
