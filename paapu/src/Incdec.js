import React from "react";
import './incdec.css';
export default class Incdec extends React.Component{
    constructor(){
        super();
        this.state={
            inputvalue:0
        }
    
            this.handleIncrement=this.handleIncrement.bind(this)
            this.handleDecrement=this.handleDecrement.bind(this)
            this.handleReset=this.handleReset.bind(this)
    }
        handleIncrement(){
           this.setState({inputvalue:this.state.inputvalue+1})
        }
        handleDecrement(){
            this.setState({inputvalue:this.state.inputvalue-1})
         }
         handleReset(){
            this.setState({inputvalue:0})
         }
    
render(){
    return(
        <div className="container">
           <div className="text-center mtg-4">
               <h1>Increment/Decrement</h1>
         </div>
         <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4">
                <input type="text" value={ this.state.inputvalue} className="form-control bg-danger" disabled />
                
             </div>

             <div className="col-md-3"></div>
             <div className="row">
            <div className="col-md-4"></div>
            
            <div className="col-md-2 paapu">
            
            <button className="btn btn-warning mt-4" onClick={this.handleDecrement}>Decrement</button>
            </div>
            <div className="col-md-2 paapu">
            <button className="btn btn-info mt-4" onClick={this.handleReset}>**Reset**</button>
            </div>
            <div className="col-md-2 paapu">
            <button className="btn btn-success mt-4" onClick={this.handleIncrement}>Increment</button>
            
            </div>
            <div className="col-md-2"></div>
             </div>

         </div>
        </div>
    )
}
}