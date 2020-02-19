import React from 'react';
import '../styles/videos.scss';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
        
      }



    render(){
        console.log(this.props )
       
      return (
        <div className='video-container'>
            <iframe src={this.props.video.clip}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                className='video'
        />
        </div>
      )
    }
  }
  
export default Video;