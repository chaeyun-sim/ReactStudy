import React, { Component } from "react";
import TOC from './components/TOC';
import ReacContent from './components/ReacContent';
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from './components/Subject';
import Control from "./components/Control";


class App extends Component {
  constructor(props){
		super(props);
		this.max_content_id = 3;
		this.state = {
			mode: 'welcome',
			selected_content_id: 0,
			subject: {title: 'WEB', sub:'World Wide Web!'},
      		welcome: {title: 'Welcome', desc :'Hello, React!!'},
			contents: [
				{id: 1, title:"HTML", desc: 'HTML is for information'},
				{id: 2, title: 'CSS', desc: 'CSS is for design'},
				{id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
			]
		}
	}
	getReadContent(){
		var i = 0;
		while(i < this.state.contents.length){
			var data = this.state.contents[i];
			if(data.id === this.state.selected_content_id){
				return data;
				// break;
			}
			i = i + 1
		}
	}
	getContent(){
		var _title = null;
		var _desc = null;
		var _article = null;
		
		if(this.state.mode === 'welcome'){
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReacContent title={_title} desc={_desc}></ReacContent>
		}

		else if (this.state.mode === 'read'){
			const _content = this.getReadContent();
			_article = <ReacContent title={_content.title} desc={_content.desc}></ReacContent>
		}

		else if (this.state.mode === 'create'){
			_article = <CreateContent onSubmit={function(_title, _desc){
				this.max_content_id = this.max_content_id + 1;
				const newContents = Array.from(this.state.contents);  /// Array.from -> jupyter의 .copy()
				newContents.push(
					{id: this.max_content_id, title:_title, desc:_desc}
				)
				this.setState({
					contents: newContents,
					mode: 'read',
					selected_content_id: this.max_content_id,
				})
			}.bind(this)}></CreateContent>
		}
		
		else if (this.state.mode === 'update'){
			const _content = this.getReadContent();
			_article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
				// this.max_content_id = this.max_content_id + 1;
				const _content = Array.from(this.state.contents);
				var i = 0;
				while(i < _content.length){
					if(_content[i].id === _id) {
						_content[i] = {id : _id, title: _title, desc: _desc}
						break;
					}
					i = i + 1;
				}
				this.setState({
					contents: _content,
					mode: 'read'
				})
			}.bind(this)}></UpdateContent>
		}
		return _article;
	}

	render(){
		// console.log(this.state.mode)
		console.log(this.state.selected_content_id)

	  return (
	    <div className="App">
	      	<Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
				this.setState({mode: 'welcome', selected_content_id: 0})
				}.bind(this)}>
	    	</Subject>
	      	<TOC onChangePage={function(id){
				console.log(id)
				this.setState({
					mode: 'read',
					selected_content_id: parseInt(id),
				})}.bind(this)} data={this.state.contents}>
			</TOC>
			{this.getContent()}
			<Control selected={this.state.selected_content_id} onChangeMode={function(_mode){
				if(_mode === 'delete'){
					if(window.confirm('정말 삭제하시겠습니까?')){
						var _contents = Array.from(this.state.contents)
						var i = 0;
						while(i < _contents.length){
							if(_contents[i].id === this.state.selected_content_id){
								_contents.splice(i, 1);
								break;
							}
							i = i + 1;
						}
						this.setState({
							mode: 'welcome',
							contents: _contents,
						})
					}
				} else {
					this.setState({
						mode: _mode,
					})
				}
			}.bind(this)}></Control>
	      	{/* <ReacContent title={_title} desc={_desc}></ReacContent> */}
	    </div>
	  );
	}
}

export default App;