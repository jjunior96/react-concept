import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = () => {
    console.log('');
  };

  return (
    <Container>
      <Background>
        <div>
          <Image src="/assets/bg.jpg" width={1000} height={1000} />
        </div>
      </Background>

      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
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
        </Form>

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
