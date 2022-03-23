import { FC } from "react";
import "./style.css";
import { Button as BootStrapButton } from "react-bootstrap";

type ButtonProps = {
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean | undefined;
  variant?: string;
  size?: "sm" | "lg" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: FC<ButtonProps> = ({
  handleOnClick,
  children,
  isDisabled,
  variant,
  size,
  type,
}) => {
  return (
    <BootStrapButton
      variant={variant}
      disabled={isDisabled}
      onClick={handleOnClick}
      size={size}
      type={type}
    >
      {children}
    </BootStrapButton>
  );
};

export default Button;
