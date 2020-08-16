import React from "react";
import ReactTags from "react-tag-autocomplete";
import axios from "axios";

class TagForum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [{ id: "1", name: "bmw" }],
      suggestions: [],
    };

    this.reactTags = React.createRef();
  }
  componentDidMount() {
    axios
      .get(`http://103.194.69.70:8080/api/v1/forum/tags/`)
      .then((res) => {
        const suggestions = res.data.data;
        this.setState({ suggestions });
      });
  }

  onDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  onAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
    return (
      <div>
        <ReactTags
          ref={this.reactTags}
          tags={this.state.tags}
          suggestions={this.state.suggestions}
          onDelete={this.onDelete.bind(this)}
          onAddition={this.onAddition.bind(this)}
        />
      </div>
    );
  }
}
export default TagForum;
