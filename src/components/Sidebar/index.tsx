// import Image from 'next/image';
import Link from 'next/link';
import {
  RiHomeFill,
  RiSearch2Line,
  RiCompassDiscoverFill,
  RiFileShieldFill,
  RiHeart2Fill,
  RiFolderDownloadFill
} from 'react-icons/ri';

import { AiFillClockCircle } from 'react-icons/ai';

import Logo from 'components/Logo';
import Section from './SectionSidebar';
// import ItemSection from './Section/ItemSection';

import { Container, Content } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <Logo />
    <Content>
      <Section title="MENU">
        {/* <ItemSection name="Home" icon={RiHomeFill} /> */}

        <Link href="/">
          <a>
            <RiHomeFill size={20} />
            Home
          </a>
        </Link>

        <Link href="/">
          <a>
            <RiSearch2Line />
            Search
          </a>
        </Link>

        <Link href="/">
          <a>
            <RiCompassDiscoverFill />
            Discover
          </a>
        </Link>

        <Link href="/">
          <a>
            <RiFileShieldFill />
            Albuns
          </a>
        </Link>
      </Section>

      <Section title="LIBRARY">
        <Link href="/">
          <a>
            <AiFillClockCircle />
            Recent
          </a>
        </Link>

        <Link href="/">
          <a>
            <RiHeart2Fill />
            Favourites
          </a>
        </Link>

        <Link href="/">
          <a>
            <RiFolderDownloadFill />
            Local
          </a>
        </Link>
      </Section>
    </Content>
  </Container>
);

export default Sidebar;
