import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  border: 1px solid black;
  padding: 1%;
  margin: 1% 0;
`;

const Image = styled.img`
  width: 97%;
  margin: 0 1.5%;
`;

const MealCard = props => (
  <Section>
    <Image src={props.image_url} />
    <br />
    <div>
      <h3>{props.name}</h3>
      <span>{props.rating} / 5.0 </span>
      <span>with {props.review_count} reviews.</span>
      <span>Price: {props.price}</span>
    </div>
  </Section>
);

export default MealCard;
