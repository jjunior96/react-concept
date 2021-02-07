import { IconBaseProps } from 'react-icons';
import Link from 'next/link';

import { Container } from './styles';

interface ItemSectionProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const ItemSection: React.FC<ItemSectionProps> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <Link href="/">
        <a>
          <Icon size={20} />
          <p>{name}</p>
        </a>
      </Link>
    </Container>
  );
};

export default ItemSection;
