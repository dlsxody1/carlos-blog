import React from "react";
import { Button } from "./Button";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = () => (
  <header className="h-32 w-7 border-headerColor text-cyan-300">
    <div></div>
    <div>Carlos2</div>
  </header>
);
