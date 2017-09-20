import React, { Component } from 'react';
import styled from 'styled-components';
import fetchMealData from './utils/fetchMealData';
import Header from './components/Header';
import MealList from './components/MealList';

const Wrapper = styled.div`text-align: left;`;

class App extends Component {
  state = {
    serachTerm: 'test SearchTerm',
    mealData: []
  };
  componentDidMount = () => {
    fetchMealData().then(mealData => {
      this.setState({ mealData });
    });
  };
  render() {
    return (
      <Wrapper>
        <Header />
        {this.state.mealData ? <MealList meals={this.state.mealData} /> : null}
      </Wrapper>
    );
  }
}

export default App;
