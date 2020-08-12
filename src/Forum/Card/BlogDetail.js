import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HelmetMetaData from "./HelmetMetaData";
class BlogDetail
extends Component {
   render() {
   const { classes } = this.props;
   return (
      <HelmetMetaData title={this.state.blog.title}
          description={ this.state.blog.title +      this.state.blog.author.name}
          image={this.state.blog.gallery[0]}
      ></HelmetMetaData>
  )};
}
export default App;