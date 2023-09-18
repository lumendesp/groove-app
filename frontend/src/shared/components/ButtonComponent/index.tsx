import React from "react";
import { ButtonWrapper } from "./style";
import { string } from "yargs";

interface ButtonProps {
  primary?: boolean;
  customStyle?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  data_cy?: string;
  data_cy3?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  primary,
  customStyle,
  children,
  onClick,
  isActive,
  data_cy,
  data_cy3,
}) => {
  return (
    <ButtonWrapper
      primary={primary}
      style={{
        ...customStyle,
      }}
      onClick={onClick}
      data-cy={data_cy}
      data-cy3={data_cy3}
    >
      {children}
    </ButtonWrapper>
  );
};

export default ButtonComponent;
