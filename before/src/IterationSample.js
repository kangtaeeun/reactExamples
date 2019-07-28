import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        name:'',
        names : ['A','B','C','D','E']
    };
    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        });
    }
    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name)
            ,name:''
        });
    }

    handleRemove = (index) =>{
        const {names} = this.state;
        this.setState({
            names: [...names.slice(0,index), ...names.slice(index+1,names.size)]
        });
    }
    handleTest = () =>{
        alert(1);
    }

    render() {

        const nameList = this.state.names.map( 
            (name,index) => <li key={index} onDoubleClick={() =>this.handleRemove(index)}> {name} </li>
        );

        
        
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.name} />
                <button onClick={this.handleInsert} >+</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;