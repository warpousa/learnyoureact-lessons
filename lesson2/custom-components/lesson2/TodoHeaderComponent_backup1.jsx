import React from 'react';

class TodoHeaderComponent extends React.Component {
  render() {
    return (
        <div>      
            <div style={{display: "flex", margin: "30px auto 15px auto", maxWidth: "1024px", flexDirection: "column"}}>
            <div style={{width: "200px", height: "15px", background: "#405c8a", borderRadius: "10px", color: "#FFF", padding: "20px", marginBottom: "20px"}}> 
                <a href="#" style={{color:"#FFF"}}>COMPANY LOGO HERE</a>
            </div> 
            <ul style={{display: "flex", justifyContent: "flex-start", flexDirection: "row", background: "#002663", listStyleType: "none"}}>
                <li style={{fontWeight: "bold", backgroundColor: "#002663", padding: "18px 26px 11px 26px", borderRight: "1px solid #405c8a", color: "#fff"}}><a href="#" style={{color:"#FFF", textDecoration: "none" }}>Todo List</a></li>
                <li style={{fontWeight: "bold", backgroundColor: "#002663", padding: "18px 26px 11px 26px", borderRight: "1px solid #405c8a", color: "#fff"}}><a href="#" style={{color:"#FFF", textDecoration: "none"}}>Add Todo</a></li>
            </ul>
            </div>
            <div>
                <div style={{borderBottom: "1px solid #d8d8d9", padding: "8px 0 0 0", width: "100%"}}></div>
                <div style={{backgroundImage: "-webkit-radial-gradient(circle, rgba(0, 0, 0, .1), transparent)", height:"3px", marginBottom:"10px"}}></div>
            </div>
        </div>
    );
  }
}

export default TodoHeaderComponent;