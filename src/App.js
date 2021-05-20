import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
//SHowing vs-code github setup
export default class App extends Component {
  render() {
    return (
      <div >
         <div className='container'>
           <div className="row">
            <TodoInput/>
            <TodoList/>
           </div>
         </div>
        
      </div>
    )
  }
}


