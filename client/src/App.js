import React, { Component } from 'react';
import styled from 'styled-components';
import MealList from './components/MealList';
import sampleData from './data.json';

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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Title>MealPath</Title>
        </Header>
        <MealList meals={sampleData} />
      </Wrapper>
    );
  }
}

export default App;
