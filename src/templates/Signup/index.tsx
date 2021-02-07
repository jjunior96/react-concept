import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background>
        <div>
          <Image src="/assets/bg.jpg" width={1000} height={1000} />
        </div>
      </Background>

      <Content>
        <form>
          <h1>Sign Up</h1>
          <Input name="name" type="text" placeholder="Full Name" />
          <Input name="email" type="text" placeholder="Email Address" />
          <Input name="mobileno" type="text" placeholder="Mobile No" />

          <span>
            You are agreeing to the
            <Link href="/">
              <a> Terms of Services </a>
            </Link>
            and
            <Link href="/">
              <a> Privacy Policy </a>
            </Link>
          </span>

          <Button name="button">Get Starded</Button>
        </form>

        <span>
          Already a member?
          <Link href="/">
            <a> Sign In </a>
          </Link>
        </span>
      </Content>
    </Container>
  );
};

export default SignUp;
