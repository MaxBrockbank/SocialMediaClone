import React from "react";
import FeedItem from "./FeedItem"


const feedItemsList = [
  {
    username: "Captainicus Kangaroopum", 
    title: "Blorem Dipstips",
    message: "I am the Walrus, sum of Ip, goo goo gajoob"
  },
  {
    username: "Ralph",
    title: "Ralph has a message",
    message: "Lore of Ip, great quips!"
  },
]

function Feed(){
  return(
    
    <React.Fragment>
      <hr/>
      {feedItemsList.map((item, index)=>
        <FeedItem username={item.username}
        title={item.title}
        message={item.message}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default Feed;