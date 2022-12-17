import React, { Component } from "react";

// function Contents(props) {
//   return(
//     <article>
//       <h2>{props.title}</h2>
//       {props.desc}
//     </article>
//     )
// }

class ReacContent extends Component {
  render(){
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}


export default ReacContent;