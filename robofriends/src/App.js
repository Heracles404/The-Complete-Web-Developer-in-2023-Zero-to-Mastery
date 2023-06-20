import React, {Component} from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";


class App extends Component{
    // Determines initial state
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        this.setState({robots: robots})
    }

    // Detects Changes TextField Value
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value })
    }


    // DOM Manipulation
    render(){
        // Filters Robots
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;