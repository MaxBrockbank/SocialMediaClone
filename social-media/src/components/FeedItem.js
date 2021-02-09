import React from "react";
import PropTypes from "prop-types";

function FeedItem(props){
  return(
    <React.Fragment>
      <h3>{props.username}</h3>
      <h4>{props.title}</h4>
      <p>{props.message}</p>
    </React.Fragment>
  );
}

FeedItem.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string
}

export default FeedItem