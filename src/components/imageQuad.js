import React from 'react';
import '../css/imageQuad.css'
import ImageCard from './imageCard'

const ImageQuad = (props) => {
    return (
        <div className="imageQuadDiv">

            <div className="imageQuadWhole">

                <div className="imageQuadUpper">
                <ImageCard src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        cardTitle='Gym' />
                <ImageCard src='https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        cardTitle='Sauna' />
                </div>

                <div className="imageQuadLower">
                <ImageCard src='https://images.unsplash.com/photo-1570937943543-4266379b1c2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        cardTitle='Indoor Track' />
                <ImageCard src='https://images.unsplash.com/photo-1570937943543-4266379b1c2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        cardTitle='24/7 Access' />
                </div>
                
            </div>



        </div>

    )

}

export default ImageQuad