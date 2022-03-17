import React from "react";
import {
  SignupWrapper,
  SigunUpMain,
  AmazonLogo,
  Form,
  Heading,
  InputWrapper,
  Input,
  Lable,
  SubmitButton,
  Para,
  CreateButton,
  FormWrapper,
} from "./Styles";
import Amazonlog from "../../Assets/amazon_logo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <SignupWrapper>
        <SigunUpMain>
          <Link to="/">
            <AmazonLogo src={Amazonlog} />
          </Link>
          <FormWrapper>
            <Form>
              <Heading>Sign-in</Heading>
              <InputWrapper>
                <Lable>E-mail</Lable>
                <Input type="text"></Input>
              </InputWrapper>
              <InputWrapper>
                <Lable>Password</Lable>
                <Input type="password"></Input>
              </InputWrapper>
              <SubmitButton>Sign In</SubmitButton>
            </Form>
            <Para>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of USe
              & Sale. Please see our Privacy otice, our Cookies Notice and our
              Intrest-Based Ads Notice.
            </Para>
            <CreateButton>create your amazon account</CreateButton>
          </FormWrapper>
        </SigunUpMain>
      </SignupWrapper>
    </>
  );
};

export default SignUp;
