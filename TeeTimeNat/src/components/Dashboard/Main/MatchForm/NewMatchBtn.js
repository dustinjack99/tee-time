import React, {Component} from 'react';
import {Divider, Button} from 'react-native-elements';
import {Link} from 'react-router-native';
import './stylesheet.scss';

class NewMatchBtn extends Component {
  render() {
    return (
      <Divider id="match-btn-container">
        <Link id="new-match-link" to="/dashboard/matchForm">
          <Button id="new-match-btn">New Match</Button>
        </Link>
      </Divider>
    );
  }
}

export default NewMatchBtn;
