import { ReactNode } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
}


export interface IAuthProvider {
  currentUser: IUser | null;
}


export interface IContextProvider {
  children: ReactNode;
}
