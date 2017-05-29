import React from 'react';

class TodoLoginComponent extends React.Component {
  render() {
        return (
            <div>
                <div style={{backgroundColor: "#e1eff0", minHeight:"550px", display: "flex", margin: "30px auto 15px auto", maxWidth: "930px", padding: "17px", flexDirection: "column"}}>  
                    <div style={{fontSize: "2em", fontWeight: "bold", color: "#405c8a", display: "flex", padding: "0.5em"}}>
                    Please Log In
                    </div>
                    <div style={{display: "flex", flexDirection: "column", padding: "1.5em"}}>
                    <div style={{display: "flex"}}>
                        <div style={{justifyContent: "flex-end", margin: "1px 10px 8px 0", fontSize: "1.3em"}}>
                            Username:
                        </div>
                        <div style={{justifyContent: "flex-start"}}>
                            <input style={{fontSize:"1.067em"}} type="text" label="Username:"/>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{justifyContent: "flex-end", margin: "1px 14px 8px 0", fontSize: "1.3em"}}>
                            Password:
                        </div>
                        <div style={{justifyContent: "flex-start"}}>
                            <input style={{fontSize:"1.067em"}} type="password" label="Password:"/>
                        </div>
                    </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <button style={{background: "#002663", color: "#FFF", cursor: "pointer", border: "none", padding: "15px", fontSize: "1.3em", margin: "15px", borderRadius:"15px"}}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoLoginComponent;