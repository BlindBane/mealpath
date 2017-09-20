import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
  border: 1px solid black;
  padding: 1%;
  margin: 1% 1%;
`;

const Image = styled.img`
  width: 97%;
  margin: 1.5% 1.5%;
  box-shadow: 2px 2px 6px 0px grey, -2px -2px 6px 0px grey;
`;

const MealCard = props => (
  <Card>
    <Image src={props.image_url} />
    <div>
      <h3>{props.name}</h3>
      <span>{props.rating} / 5.0 </span>
      <span>with {props.review_count} reviews.</span>
      <span>Price: {props.price}</span>
    </div>
  </Card>
);

export default MealCard;
