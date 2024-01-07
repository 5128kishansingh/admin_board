import React from "react";
import Upload from './Images/upload.png';
import Notification from './Images/Notification.png'
import message from './Images/message.png'
import beat from './Images/beat.png'


export default function Navbar() {
    return (
        <div className="navbar">
            <h2 className="title"> Hello Mad  ✋</h2>
            <input type="text" className="textInput" name="textInput" placeholder="🔍  Search here "></input>

            <div className="side-icon">
                <button className="btn-1" >
                    <div className="upload-button">
                        <img src={Upload} className="icon-0" />
                        <a href="https://www.facebook.com//" className="para">New Upload</a>
                    </div>
                </button>
                <button className="btn-2">
                    <img src={Notification} className="icon-1" />
                </button>
                <button className="btn-3">
                    <img src={message} className="icon-2" />
                </button>
                <button className="btn-4" >
                    <img src={beat} className="icon-3" />
                </button>
            </div>



        </div>
    )
}