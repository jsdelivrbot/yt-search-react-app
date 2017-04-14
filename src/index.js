import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB0l7kzOymJQK6DQTtOdzcMeIeLE6DnCQU';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surf')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="row">
        <header className="header">
          <h1>React Yoututbe App</h1>
        </header>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        {/* <VideoDetail video={this.state.videos[0]}/> */}
        <VideoList
          videos={this.state.videos}
          onVideoSelected = {selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
