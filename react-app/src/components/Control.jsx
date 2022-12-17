import React, { Component } from "react";

class Control extends Component {
  render(){
    return (
      <ul>
				<li><a href="/create" onClick={function(e){
          e.preventDefault();  //preventHandler로 하니까 페이지가 넘어가지 않는 오류가 생김.
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>

				<li><a href="/update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>

				<li><input type="button" value="delete" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)}></input></li>

			</ul>
    );
  }
};

export default Control;