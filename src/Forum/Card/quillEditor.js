import React from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";

class quillEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.onChange = (editorState) => this.setState({ editorState });
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    const { editorState } = this.state;

    return (
      <div style={styles.editor} onClick={this.focusEditor}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            inputAccept:
              "application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel",
          }}
        />
      </div>
    );
  }
}

const styles = {
  editor: {
    border: "1px solid gray",
    minHeight: "6em",
  },
};

export default quillEditor;
