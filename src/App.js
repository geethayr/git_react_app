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

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log("[Event in App]", event.target.value);


    }
    render() {
        const filteredUpc = this.state.upcs.filter(upcs => {
            return upcs.productname.toLowerCase().includes(this.state.searchfield.toLowerCase());
            console.log("[Filtered UPCS in App]", filteredUpc);
        })
        return(
            <div className='tc'>
                <h1>Returns TC decoder</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList upcs={filteredUpc}/>
                </div>
        );
    }
}

export default App;