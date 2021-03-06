import React from 'react';

const Card = ({id, productname, upc }) => { //destructed 
    //const {id, productname, upc } = props
    return (
        <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img alt='Barcode Generator TEC-IT'
                 src={`https://barcode.tec-it.com/barcode.ashx?data=${upc}&code=UPCA&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&codepage=&qunit=Mm&quiet=0`}/>
            <div>
                <h2>{productname}</h2>
                <p>{upc}</p>
            </div>
        </div>
    );
}

export default Card;