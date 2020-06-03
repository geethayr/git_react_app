import React from 'react';
import {upcs} from "./upcs";
import Card from './Card'

const CardList = () => {
    return (
        <div>
            <Card id={upcs[0].id} productname={upcs[0].productname} upc={upcs[0].upc}/>
            <Card id={upcs[1].id} productname={upcs[1].productname} upc={upcs[1].upc}/>
            <Card id={upcs[2].id} productname={upcs[2].productname} upc={upcs[2].upc}/>
        </div>
    )
}

export default CardList;