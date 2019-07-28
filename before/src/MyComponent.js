import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name:'static name',
        age: 10
    };
    state = {
        myNumber: 0
    }
    render() {
        return (
            <div>
                <div>this is myComponent ! congrat ! {this.props.name} !  {this.props.age} ! {this.state.myNumber} </div>
                <button onClick={()=>{
                    this.setState({
                        myNumber:this.state.myNumber + 1
                    })
                }}>더하기</button>
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
}
export default MyComponent;