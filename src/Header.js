import React from "react";
import "./Header.css"
import LiveTvIcon from '@material-ui/icons/LiveTv';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FlashOnIcon from '@material-ui/icons/FlashOn';
let Header=()=>{
    return(
    <>
    <div className="header">
        <div className="header_icons">
        <div className="header_icon header_icon_active">
            <HomeIcon/>
            <p>Home</p>
        </div>
        <div className="header_icon">
            <LiveTvIcon/>
            <p>Verfied</p>
        </div>
        <div className="header_icon">
            <VideoLibraryIcon/>
            <p>Collection</p>
            </div>
            <div className="header_icon">
            <SearchIcon/>
            <p>Search</p>
            </div>
            <div className="header_icon">
            <FlashOnIcon/>
            <p>Trending</p>
            </div>
        </div>
    </div>
    </>
    )
}
export default Header;