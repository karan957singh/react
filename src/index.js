import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_KEY = 'AIzaSyBRp9r7F2LE8159lfXFnFZsUba5cOLqIys';

// this component should produce some HTML
class App extends Component{
	constructor(props){

		super(props);
		this.state = { 
			videos: [],
			selectedVideo:null
		};
		this.videoSearch('sci-fi');
		
	}
	videoSearch(term){
	YTSearch({key:YOUTUBE_KEY, term: term}, (data) => {
			this.setState({
				videos:data,
				selectedVideo:data[0]
			});
	});		
	}
render(){
	const videoSearch =_.debounce((term)=> {this.videoSearch(term)},800);
return (
	<div>
  <SearchBar onSearchTermChange={videoSearch}/>
  <VideoDetail  video={this.state.selectedVideo} />
  <VideoList 
  		onVideoSelect={selectedVideo => this.setState({selectedVideo})}	
  		videos={this.state.videos} />
  </div>
  );	
}
  
}

ReactDom.render(<App />, document.querySelector(".container"));