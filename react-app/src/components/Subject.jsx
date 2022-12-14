import React, { Component } from "react";

class Subject extends Component {
  render(){
    return (
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
          console.log(this.props.selected)
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
};

export default Subject;