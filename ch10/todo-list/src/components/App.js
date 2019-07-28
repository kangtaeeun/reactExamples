import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTods = new Array(500).fill(0).map(
    (item,index) => ({id:index, text:`일정 ${index}`, done:false})
);

class App extends Component {
    state = {
        input: '',
        todos: initialTods,
    }
    
    id = 1;
    
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        this.setState({
            input:e.target.value
        });
    }
    handleInsert = (id) => {
        const newTodo = {
            id: this.getId(),
            text: this.state.input,
            done:false
        }

        this.setState({
            todos: [ ...this.state.todos, newTodo],
            input:''
        });
    }
    handleToggle = (id) => {
        // console.log('>>' + id);
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };
        //console.log(toggled);
        this.setState({
             todos: [
                 ...todos.slice(0,index),
                 toggled,
                 ...todos.slice(index+1,todos.length)
             ]
        });
    }
    handleRemove = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        this.setState({
            todos: [
                ...todos.slice(0,index),
                ...todos.slice(index+1, todos.length)
            ]
        });
    }

    render() {
        
        return (
           <PageTemplate>
               <TodoInput onChange={this.handleChange} value={this.state.input} onInsert={this.handleInsert}/>
               <TodoList todos={this.state.todos} 
                         onToggle={this.handleToggle} 
                         onRemove={this.handleRemove}/>
           </PageTemplate>
        );
    }
}

export default App;