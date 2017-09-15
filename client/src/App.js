import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`text-align: left;`;

const Header = styled.div`
  background-color: green;
  color: white;
  height: 8vh;
  padding-top: 1px;
  margin: 0;
`;

const Title = styled.h2`
  color: white;
  padding: 0;
  margin: 0;
`;

const Section = styled.section`
  float: left;
  margin: 0 0.2%;
  padding: 0;
  width: 32%;
  border: 1px solid black;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Title>MealPath</Title>
        </Header>
        <Section>WHOA</Section>
        <Section>WHOA</Section>
        <Section>WHOA</Section>
        <Section>WHOA</Section>
      </Wrapper>
    );
  }
}

export default App;
