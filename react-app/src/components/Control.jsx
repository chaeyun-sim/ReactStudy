import React, { Component } from "react";

class Control extends Component {
  render(){
    return (
      <ul style={{ listStyle:"none", display:"flex", padding: 0}}>
				<li>
          <a href="/create" onClick={function(e){
          e.preventDefault();  //preventHandler로 하니까 페이지가 넘어가지 않는 오류가 생김.
          this.props.onChangeMode('create');}.bind(this)}><button style={{ backgroundColor: 'limegreen', color:'white', border: 'none', borderRadius: '6px', padding: '5px', fontSize: "11px"}}>create</button></a>
        </li>
        <div>
          {
            (this.props.selected >= 1)
              ? (
                  <li>
                    <a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update')}.bind(this)}><button style={{ backgroundColor: 'red', color:'white', border: 'none', borderRadius: '6px', padding: '5px', fontSize: "11px"}}>update</button></a>
                  </li>
                  
                )
              : ""
          }
        </div>
        <div>
          {
            (this.props.selected >= 1)
              ? (
                  <li>
                    <input type="button" value="delete" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete')}.bind(this)} style={{ backgroundColor: 'lightgray', color:'white', border: 'none', borderRadius: '6px', padding: '5px', fontSize: "11px"}}></input>
                  </li>
                )
              : ""
          }
        </div>
			</ul>
    );
  }
};

export default Control;