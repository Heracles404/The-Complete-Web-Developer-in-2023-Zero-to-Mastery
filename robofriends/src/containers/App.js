import React, {Component} from "react";
import CardList from "../components/CardList";
import {robots} from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";

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
        const {robots} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;