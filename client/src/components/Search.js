import React from 'react';

cconst SearchBar = props => {
  return (
    <div>
      <form>
      <input type="text" placeholder="Search..." value={props.searchTerm} />
      </form>
    </div>
  );
};
