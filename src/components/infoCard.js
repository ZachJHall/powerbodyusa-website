import React from 'react';

import '../css/infoCard.css'

function InfoCard (props) {
  const listItems = props.items.map((item) =>
  <li>{item}</li>
);
  return (
    <div class="infoCardDiv">
        <img src={props.src} />
      <div class="infoCardDivBody">

        <div class="infoCardDivBodyTop">
          <p>{props.title}</p>
        </div>

        <div class="infoCardDivBodyBottom">

          <div class="infoCardListContent">
            <ul>{listItems}</ul>
          </div>

        </div>

      </div>
    </div>

  );
}

export default InfoCard
