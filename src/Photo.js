import React, { useLayoutEffect } from 'react';
import './style.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"></link>
const Photo = (props) => {
    // btnClick
    return (
      
        <div className="photo">
            <img className="image" src={props.url} alt="doggo photo"/>
            <br/>
            <div className="box">
	            <a className="button" href="#popup1" onClick={()=>{props.changePhoto(props.url)}}>Download</a>
            </div>
            
            {/* <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Here i am</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <img className="popup_img" src={props.url} alt="doggo photo"/>
                    </div>
                </div>
            </div> */}
        </div>  
        
    )
}
export default Photo