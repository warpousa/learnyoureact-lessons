import React from 'react';
import TodoHeaderComponent from './custom-components/lesson3/TodoHeaderComponent';
import TodoLoginComponent from './custom-components/lesson3/TodoLoginComponent';

export default class TodoBox extends React.Component {
  render() {
    return (
      <body style={{margin: "0", padding: "0", borderTop: "5px solid #ecac00", backgroundColor: "#FFF", color: "#333", fontSize: "16px", fontFamily: "ProximaNova, Sans-Serif"}}>       
        <TodoHeaderComponent menuItems={['Todo List','Add Todo']}/>
        <TodoLoginComponent loginLabel="Log In" />
      </body>
    );
  }
}