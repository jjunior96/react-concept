import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <Container type="button">{children}</Container>;
};

export default Button;
