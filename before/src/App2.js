import React, { Component } from 'react';
import ScrollBox from './ScrollBox'

class App2 extends Component {

    render() {
        return (
            <div>
               <ScrollBox ref={(ref)=>{this.scrollBox=ref}}/>
               <button onClick={()=> this.scrollBox.scrollToBottom()}>맨밑으로</button>
            </div>
        );
    }
}

export default App2;