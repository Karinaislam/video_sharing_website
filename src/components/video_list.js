import React, { Component } from 'react';
import VideoListItem from './video_list_item';
const VideoList =(props) =>{
    
        return (
            
                <ul className="col-md-4 list-group">
                {props.videos.length}
                
                </ul>
            
        );
    };


export default VideoList;