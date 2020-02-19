import React from 'react';
import {links} from '../data/links';
import Video from './video';
import '../styles/videos.scss';

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: links
        };
        
      }



    render(){
        console.log(this.state.videos)
      return (
        <div className="videos">
            {this.state.videos.map(video => (
                <Video key={video.id} video={video}/>
            ))}
        </div>
      )
    }
  }
  
  export default Videos;