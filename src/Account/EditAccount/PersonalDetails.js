import React from "react";
import { Drawer, Form, Button, Col, Input,message } from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { API_URL } from "../../actions/urlConfig";

// function onChange(value) {
//   console.log(`selected ${value}`);
// }

// function onBlur() {
//   console.log("blur");
// }

// function onFocus() {
//   console.log("focus");
// }

// function onSearch(val) {
//   console.log("search:", val);
// }

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      phone: "",
      address_line1: "",
      address_line2: "",
      state: "",
      district: "",
      city: "",
      pin_code: "",
      name: "",
      age: "",
      gender: "",
      dob: "",
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
    const { phone, name, age, gender, dob } = this.state;
    axios
      .patch(`${API_URL}/customer/1/`, {
        user_data: {
          email: "ab@gmail.com",
          first_name: "amu",
          last_name: "fp",
          username: "lkjj",
          phone: phone,
        },
        address: {
          address_line1: "rrrr",
          address_line2: "lllnnngl",
          state: "kerala",
          district: "kozhikode",
          city: "kozhikode",
          pin_code: "678964",
        },
        name: name,
        age: age,
        gender: "Male",
        phone: phone,
        dob: dob,
      })
      .then((res) => {
        console.log("sign up res", res);
        this.setState({
          visible: false,
        });
        // this.props.history.push("/account");
      })
      .catch((error) => {
        console.log("registration error", error.response.data);
        message.info("Please Click Continue to Sign In");
      });
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
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> Edit
        </Button>
        <Drawer
          title="Edit Customer Details"
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
              <Button onClick={this.handleSubmit} type="submit">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Col gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Name",
                    },
                  ]}
                >
                  <Input
                    name="name"
                    onChange={this.handleChange}
                    placeholder="Please enter Name"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the Phone Number",
                    },
                  ]}
                >
                  <Input
                    name="phone"
                    onChange={this.handleChange}
                    placeholder="Please enter Phone Number"
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="dob"
                  label="Date Of Birth"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Date of Birth",
                    },
                  ]}
                >
                  <Input
                    name="dob"
                    type="date"
                    onChange={this.handleChange}
                    placeholder="Please enter Date of birth"
                  />
                </Form.Item>
              </Col>
            </Col>
            <Col gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[{ required: true, message: "Please enter Age" }]}
                >
                  <Input
                    name="age"
                    onChange={this.handleChange}
                    placeholder="Please enter Age"
                  />
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

export default PersonalDetails;
