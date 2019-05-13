import React from "react";
import "./Calculator.css";


class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           result : ""
    }
       
    this.handleClick = this.handleClick.bind(this)
    }
    
    
    handleClick(x) {
     var s = x.target.name;
     this.setState({
         result :  this.state.result + s
         
     })
   }

  
   
    render(){  
       
        return(

            <div className = "calculator">
                <button name = "result" className ="result" onClick = {this.handleClick}>{this.state.result}</button>
                <button name = "1" onClick = {this.handleClick}>1</button>
                <button name ="2" onClick = {this.handleClick}>2</button>
                <button name ="3" onClick = {this.handleClick}>3</button>
                <button name = "4" onClick = {this.handleClick}>4</button>
                <button name ="5" onClick = {this.handleClick}>5</button>
                <button name ="6" onClick = {this.handleClick}>6</button>
                <button name ="7" onClick = {this.handleClick}>7</button>
                <button name="8" onClick = {this.handleClick}>8</button>
                <button name ="9" onClick = {this.handleClick}>9</button>
                <button name ="+" onClick = {this.handleClick}>+</button>
                <button name ="-" onClick = {this.handleClick}>-</button>
                <button name ="/" onClick = {this.handleClick}> &divide;</button>
                <button name ="*" onClick = {this.handleClick}>*</button>
                <button name = "=" onClick = {this.handleClick}>=</button>
                <button name = "clear" onClick = {this.handleClick}>"Ac"</button>
            </div>
        )
    }



}


export default Calculator;