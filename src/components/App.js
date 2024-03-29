import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Header from './Header';

class App extends React.Component{

  state = {videos:[],selectedVideo : null};

  componentDidMount(){
    this.onTermSubmit('icc')
  }

  onTermSubmit = async term =>{
   //console.log(term);
    const response = await youtube.get('./search',{
     params:{
      part:'snippet',
      maxResults:5,
      key:"AIzaSyCuagvc-REgYQqveFCAiqMGDRZ9yHkTsC8",
      q:term
     }
   });

   //console.log(response);

   this.setState({
     videos : response.data.items,
     selectedVideo : response.data.items[0]
    });
  };

  onVideoSelect = (video) =>{
   // console.log('from the app',video);
   this.setState({ selectedVideo : video })
  };

    render(){
      return (
        <div className="ui container">
        <Header />
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
              <div className="ui row">
              <div className="ten wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              
              <div className="six wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}/>
                 </div>
                </div>
            </div>
        </div>
      );
    }
}
export default App;