import React, { Component } from "react";

class CreateContent extends Component {
  render(){
    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post" onSubmit={function(event){
          event.preventDefault();   // 페이지 전환 못하게 만들기
          // alert('Submit!')
          this.props.onSubmit(
            event.target.title.value,
            event.target.desc.value,
          );
        }.bind(this) }>
          <p><input type="text" name="title" placeholder="title"/></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"/></p>
        </form>
      </article>
    )
  }
}


export default CreateContent;