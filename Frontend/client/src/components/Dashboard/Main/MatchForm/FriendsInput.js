import React, { Component } from "react";
import FriendDatalist from "./FriendDatalist";
import "./stylesheet.css";

class FriendsInput extends Component {
  render() {
    return (
      <form className="form-group">
        <label htmlFor="friends-input">Find Friends:</label>
        <FriendDatalist allFriends={this.props.allFriends} />
        <input
          list="friends"
          type="text"
          className="form-control"
          id="friends-input"
          name="friend"
          value={this.props.friend}
          onChange={this.props.handleFriendInputChange}
        ></input>
        <p
          id="not-found-msg"
          className={this.props.friendFound ? "hide" : "show"}
        >
          Sorry, you cannot add that friend.
        </p>
        <button id="add-friend-btn" onClick={this.props.handleFriendSubmit}>
          Add Friend
        </button>
      </form>
    );
  }
}

export default FriendsInput;
