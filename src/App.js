import React,{Component} from 'react';
import CardList from './components/CardList';
import SearchField from './components/SearchField';
import './app.css';
import {robots} from './robots';
class App extends Component{

    state={searchTerm: '' , robotha: robots};
    onSearchChange=(e)=>{
        this.setState({searchTerm:e.target.value})
    }
    render(){
        const {robotha, searchTerm}=this.state;
        const filterRobots= robotha.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return (
            
        <div className="app">
            <h1>RoBOts</h1>
            <SearchField onSearchChanged={this.onSearchChange}/>
            <CardList robots={filterRobots}/>
            
        </div>
        );
    } 
} 
export default App; 
