import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';

import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <AiFillPlayCircle />
          <h1>Logo</h1>
        </a>
      </Link>
    </Container>
  );
};

export default Logo;
