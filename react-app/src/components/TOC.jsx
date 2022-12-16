import React, { Component } from "react";

// function TOC(props) {
//   const { data } = props;
//     return (
//       <nav>
//         <ul>
//           {data.map((content) => {
//             return <li key={content.id}><a href={content.title}>{content.title}</a></li>
//           })}
//         </ul>
//       </nav>
//     )
// }

class TOC extends Component{
  render(){
    var lists=[ ];
    var data=this.props.data;
    var i=0;
    while( i < data.length ) {
      lists.push(<li key={data[i].id}><a href={"/content"+data[i].id}>{data[i].title}</a></li>);
      i=i+1;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;