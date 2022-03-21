import React, { useState } from "react";
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
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const resister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("auth", auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Input>
              </InputWrapper>
              <InputWrapper>
                <Lable>Password</Lable>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></Input>
              </InputWrapper>
              <SubmitButton onClick={signIn}>Sign In</SubmitButton>
            </Form>
            <Para>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of USe
              & Sale. Please see our Privacy otice, our Cookies Notice and our
              Intrest-Based Ads Notice.
            </Para>
            <CreateButton onClick={resister}>
              create your amazon account
            </CreateButton>
          </FormWrapper>
        </SigunUpMain>
      </SignupWrapper>
    </>
  );
};

export default SignUp;
