import React from 'react';
import {upcs} from "./upcs";
import CardList from './CardList'

const App = () => {
    return(
        <div>
            <h1>Returns TC decoder</h1>
            {/*//<SearchBox/>*/}
            <CardList upcs={upcs}/>
        </div>
    );
}


export default App;