import React from 'react';

const MealInfo = props => (
  <div>
    <p>{props.location.address1}</p>
    <p>
      {props.location.city}, {props.location.state}
    </p>
    <p>{props.location.zip_code}</p>
    <p>{props.display_phone}</p>
  </div>
);
