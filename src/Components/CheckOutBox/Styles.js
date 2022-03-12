import styled from "styled-components";

const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    background-color: var(--yellow-color);
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    color: #111;
    border: 1px solid;
    border-color: #a88734 #9c7e31;
    margin-top: 16px;
  }
`;

export { SubTotal };
