import React, {Component} from 'react';
import {upcs} from "./upcs";
import SearchBox from './SearchBox';
import CardList from './CardList';


class App extends Component {
    constructor() {
        super()
        this.state = {
            upcs: upcs,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log("[Event in App]", event.target.value)

    }
    render() {
        return(
            <div className='tc'>
                <h1>Returns TC decoder</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList upcs={this.state.upcs}/>
                </div>
        );
    }
}

export default App;