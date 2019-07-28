import React, {Component} from 'react';
import MyComponent from './MyComponent';

class MyApp extends Component {
    
    render() {
        return (
            <div>
                <MyComponent name="mina" age={38} />
            </div>
            
        );
    }
}

export default MyApp;