import React from 'react';

import Card from './Card'

const CardList = ({upcs}) => { //{upcs} = const {upcs} = props.upcs

    return (
        <div>
            {
                upcs.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={upcs[i].id}
                            productname={upcs[i].productname}
                            upc={upcs[i].upc}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;