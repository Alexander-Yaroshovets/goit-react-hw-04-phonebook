import styled from 'styled-components';

export const ContactForm = styled.form`
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.input`
  display: block;
  width: 200px;
  height: 20px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  color: darkolivegreen;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: tomato;
  padding-left: 10px;
  margin: 0px;
  font-size: 24px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  padding: 8px 20px;

  border: 1px solid blueviolet;
  border-radius: 2px;
  background-color: aquamarine;
  cursor: pointer;
  align-self: flex-end;
`;
