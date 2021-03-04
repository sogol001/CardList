import React from 'react';
import './style.css';
const SearchField =(props)=>{

    return (
    <div > 
        <input
        type="text"
        className="Search"
        placeholder="Search here"
        onChange={props.onSearchChanged}
        />
    </div>)
};
 
export default SearchField;







// class SearchField extends React.Component{
   
//     state={ inputValue: '' , completed:false};
//     inputChangeHandler=(event)=>{
//         console.log(event.target.value);
//         this.setState({inputValue:event.target.value})
//         console.log(this.state.inputValue); 
//     };
//     render(){
//         return (
//         <div> 
//         <input
//         type="text"
//         className="Search"
//         placeholder="Search here"
//         onChange={this.inputChangeHandler}
//         />
//     </div>
//         );
//     };
// }
