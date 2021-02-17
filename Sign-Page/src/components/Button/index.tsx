import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Link href="/dashboard">
      <Container type="button">{children}</Container>
    </Link>
  );
};

export default Button;
