import React from 'react';
import './style.css';
import Card from '../Card';
const CardList =({robots})=>{
    return(
         <div className="card-list">
        {robots.map((robot)=>{
            return <Card name={robot.name}  email={robot.email} id={robot.id}/>;})}
    </div>)
}
export default CardList; 