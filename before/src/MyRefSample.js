import React, { Component } from 'react';

class MyRefSample extends Component {
    
    state = {
        height: 0
    }
    
    handleClick = () =>{
        this.input.focus();
    };

    increaseHeight = () =>{
        this.setState({
            height: this.state.height + 50
        })
    };
    decreaseHeight = () =>{
        this.setState({
            height: this.state.height - 50
        })
        
    };
    
    render() {
        const customStyle = {
            backgroundColor:'grey',
            width: '100px',
            height: this.state.height,
            border: '2px solid black'
        };

        return (
            <div>
              <input ref= {ref=>{this.input = ref;}}/>
              <button onClick={this.handleClick}>focus Input</button>
              <button onClick={this.increaseHeight}>Increase Height</button>
              <button onClick={this.decreaseHeight}>Decrease Height</button>
              <div style={customStyle} ref={ref =>{this.box = ref;}}>
                hello !!
              </div>
              <p>
                  height: {this.state.height}
              </p>  
            </div>
        );
    }
}

export default MyRefSample;