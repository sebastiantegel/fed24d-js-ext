import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: currentTheme.bgColor,
        color: currentTheme.color,
      }}
    >
      {children}
    </button>
  );
};
