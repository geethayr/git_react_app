import React from 'react';

import Card from './Card'

const CardList = ({upcs}) => { //{upcs} = const {upcs} = props.upcs
    const cardComponent = upcs.map ((user, i) => {
       return  <Card id={upcs[i].id} productname={upcs[i].productname} upc={upcs[i].upc}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;