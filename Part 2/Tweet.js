import React from 'react';

function Tweet(props) {
  return (
    <p>Username: {props.username}</p>
    <p>Name: {props.realname}</p>
    <p>Message: {props.message}</p>
  );
}



export default Tweet;