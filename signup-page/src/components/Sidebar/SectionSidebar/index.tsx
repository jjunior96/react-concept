import { Container } from './styles';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Container>
      <p>{title}</p>
      {children}
    </Container>
  );
};

export default Section;
