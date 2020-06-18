import React from "react";
import { Drawer, Form, Button, Col, Input, Select } from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { API_URL } from "../actions/urlConfig";
import { message } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

class AccountCustomer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      engine_no: "",
      model_year: "",
      chassis_no: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { model_year, chassis_no, engine_no } = this.state;
    axios
      .post(`${API_URL}/customervehicle/`, {
        model_year: model_year,
        chassis_no: chassis_no,
        engine_no: engine_no,
      })
      .then((res) => {
        // console.log("sign up res", res);
        // console.log(res.data);
      })
      .catch((error) => {
        // console.log("registration error", error.response.data);
      });
    message.info("Please Click Continue to Sign In");
  }
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button
          type="primary"
          style={{ marginBottom: "2vh", marginTop: "1vh" }}
          onClick={this.showDrawer}
        >
          <PlusOutlined /> Add Vehicle Details
        </Button>
        <Drawer
          title="Add Vehicle Details"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Col gutter={16}>
              <Form.Item
                name="chassis_no"
                label="Select the car model"
                rules={[
                  {
                    required: true,
                    message: "Please enter the Chassis Number",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a car"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">BMW</Option>
                  <Option value="lucy">AUDI</Option>
                  <Option value="tom">VOLVO</Option>
                </Select>
              </Form.Item>
              {/* <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: "Please enter url" }]}
                >
                  <Input
                    style={{ width: "100%" }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col> */}
            </Col>
            <Col gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="chassis_no"
                  label="Chassis Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Chassis Number",
                    },
                  ]}
                >
                  <Input
                    name="chassis_no"
                    placeholder="Please enter Chassis Number"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="engine_no"
                  label="Engine Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Engine Number",
                    },
                  ]}
                >
                  <Input
                    name="engine_no"
                    placeholder="Please enter Engine Number"
                  />
                </Form.Item>
              </Col>
            </Col>
            <Col gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="model_year"
                  label="Model year"
                  rules={[
                    { required: true, message: "Please enter  Model year" },
                  ]}
                >
                  <Input placeholder="Please enter Model year" />
                </Form.Item>
              </Col>
            </Col>
            {/* <Col gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "please enter url description",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Col> */}
          </Form>
        </Drawer>
      </>
    );
  }
}

export default AccountCustomer;
