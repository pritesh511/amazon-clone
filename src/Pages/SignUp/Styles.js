import styled from "styled-components";

const SignupWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
const SigunUpMain = styled.div`
  max-width: 348px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AmazonLogo = styled.img`
  width: 118px;
`;
const Form = styled.form`
  width: 100%;
`;
const Heading = styled.h5`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const InputWrapper = styled.div`
  margin-bottom: 12px;
`;
const Lable = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
`;
const Input = styled.input`
  padding: 8px 12px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  :focus {
    border: 1px solid #a88734;
    box-shadow: none;
    outline: none;
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--yellow-color);
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  color: #111;
  border: 1px solid;
  border-color: #a88734 #9c7e31;
  margin-top: 8px;
`;
const Para = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
  font-weight: 500;
`;
const CreateButton = styled.button`
  width: 100%;
  background-color: #e4e4e5;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  color: #111;
  margin-top: 8px;
  border: 1px solid black;
`;
const FormWrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 4px;
`;
export {
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
};
