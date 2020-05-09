import React from 'react';
import '../css/imageCard.css'

const ImageCard = (props) => {
    return (
        <div className="imageCardDiv">
            <img src={props.src} />
            <div className="imageCardDivTitle">
                <h1>{props.cardTitle}</h1>
            </div>
        </div>

    )

}

export default ImageCard