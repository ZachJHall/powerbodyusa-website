import React from 'react';

import '../css/infoCard.css'

function InfoCard (props) {
  const listItems = props.items.map((item) =>
  <li>{item}</li>
);
  return (
    <div class="infoCardDiv">

      <div class="infoCardDivBody">

        <div class="infoCardDivBodyTop">
          <p>{props.title}</p>
        </div>

        <div class="infoCardDivBodyBottom">
        <ul>{listItems}</ul>
        </div>

      </div>
    </div>

  );
}

export default InfoCard
