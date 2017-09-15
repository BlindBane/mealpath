import React from 'react';
import styled from 'styled-components';

import MealCard from './MealCard';

const Section = styled.section`
  margin: 1%;
  padding: 1%;
`;

const MealList = props => (
  <Section>{props.meals.map(m => <MealCard key={m.id} {...m} />)}</Section>
);

export default MealList;
