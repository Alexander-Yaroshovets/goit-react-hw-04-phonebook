import styled from 'styled-components';

export const ContactTitle = styled.h2`
  text-align: center;
  color: tomato;
  padding-left: 10px;
  margin: 0px;
  font-size: 24px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
`;

export const CotactList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0px;
  border: 1px dashed blue;
`;

export const Contact = styled.p`
  font-size: 14px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: lighter;
  color: green;
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  border: 1px solid blueviolet;
  border-radius: 2px;
  background-color: aquamarine;
  cursor: pointer;
`;

export const ContactItem = styled.li`
  list-style: none;
  border: 1px dashed blue;
  padding: 5px;
`;
