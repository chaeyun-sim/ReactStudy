import React, { Component } from "react";
import TOC from './components/TOC'
import Contents from './components/Contents'
import Subject from './components/Subject'


class App extends Component {
  constructor(props){
		super(props);
		this.state = {
			mode: 'read',
			selected_content_id: 2,
			subject: {title: 'WEB', sub:'World Wide Web!'},
      		welcome: {title: 'Welcome', desc :'Hello, React!!'},
			contents: [
				{id: 1, title:"HTML", desc: 'HTML is for information'},
				{id: 2, title: 'CSS', desc: 'CSS is for design'},
				{id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
			]
		}
	}
	render(){
		console.log(this.state.mode)
		var _title = null;
		var _desc = null;
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if (this.state.mode === 'read'){
			var i = 0;
			while(i < this.state.contents.length){
				var data = this.state.contents[i];
				if(data.id === this.state.selected_content_id){
					_title = data.title;
					_desc = data.desc;
					break;
				}
				i += 1
			}
		}

	  return (
	    <div className="App">
	      <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
			this.setState({mode: 'welcome'})
			}.bind(this)}>
	      	</Subject>
	      <TOC onChangePage={function(id){
			console.log(id)
			this.setState({
				mode: 'read',
				selected_content_id: parseInt(id),
			});
		  }.bind(this)} data={this.state.contents}></TOC>
	      <Contents title={_title} desc={_desc}></Contents>
	    </div>
	  );
	}
}

export default App;