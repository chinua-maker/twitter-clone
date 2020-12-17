import React from "react";
import "./Widget.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
    return (
        <div className="widgets">
            <div className="widget_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="search twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Cleverqazi"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    );
}

export default Widget;
