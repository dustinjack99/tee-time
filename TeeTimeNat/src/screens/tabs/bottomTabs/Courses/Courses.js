import React, { Component } from "react";
import { Divider, Text, ListItem } from "react-native-elements";
import GolfAPI from "../../../../utils/golfGeniusAPI";
// import style from "./stylesheet.scss";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      userCourses: [],
      allCourses: []
    };
  }

  componentDidMount() {
    GolfAPI.findCourses().then(res => {
      const courseData = res.data.courses;
      const courses = [];
      for (let i = 0; i < courseData.length; i++) {
        courses.push(courseData[i].name);
      }
      this.setState({ allCourses: courses });
      // console.log(courses);
    });
  }

  render() {
    return (
      <>
        <Text h3>My Favorite Courses:</Text>

        <Text>Placeholder Greens</Text>

        <Text h3>All Available Courses:</Text>
        <Divider id="all-courses-list">
          {this.state.allCourses.map((value, index) => {
            return <ListItem title={value} key={index} />;
          })}
        </Divider>
      </>
    );
  }
}

export default Courses;
