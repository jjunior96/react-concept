import Sidebar from 'components/Sidebar';
import Section from 'components/Section';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Teste</h1>
        <Section title="Global Top 50" />
        <Section title="Global Top 50" />
      </Content>
    </Container>
  );
};

export default Dashboard;
