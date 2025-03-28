import { Outlet } from "react-router";
import CharacterModal from "./CharacterModal";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <CharacterModal />
      {children}
      <Outlet />
    </>
  );
};
