import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: green;
  color: white;
  height: 8vh;
  padding-top: 1px;
  margin: 0;
`;

const Title = styled.h2`
  display: inline-block;
  color: white;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  color: white;
  padding: 0;
  margin: auto auto auto auto;
`;

const Header = props => {
  return (
    <Wrapper>
      <Title>MealPath</Title>
      <Input type="text" placeholder="Search..." value={props.searchTerm} />
    </Wrapper>
  );
};

export default Header;
