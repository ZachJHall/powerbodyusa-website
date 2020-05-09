import React from 'react';

import '../css/infoCard.css'

function InfoCard (props) {
  const listItems = props.items.map((item) =>
  <li>{item}</li>
);
  return (
    <div class="infoCardDiv">
      <ul>{listItems}</ul>
    </div>

  );
}

export default InfoCard
