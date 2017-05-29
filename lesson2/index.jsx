import React from 'react';
import TodoHeaderComponent from './custom-components/lesson2/TodoHeaderComponent';
import TodoLoginComponent from './custom-components/lesson2/TodoLoginComponent';

export default class TodoBox extends React.Component {
  render() {
    return (
      <body style={{margin: "0", padding: "0", borderTop: "5px solid #ecac00", backgroundColor: "#FFF", color: "#333", fontSize: "16px", fontFamily: "ProximaNova, Sans-Serif"}}>       
        <TodoHeaderComponent />
        <TodoLoginComponent />
      </body>
    );
  }
}