import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  className: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className,
  disabled,
}: IButton) {

  return (
    <>
      <button 
        onClick={onClick} 
        className={className} 
        disabled={disabled}>
        {children}
      </button>
    </>
  );
}
