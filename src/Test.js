import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
  if(value==="lucy"){
    window.alert("hello")
  }
}

export default class Test extends Component {
  render() {
    return (
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>    
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    );
  }
}
