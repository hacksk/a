import React, { Component } from 'react'
import { Tabs, Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

export default class NavbarStore extends Component {
    state = {
        tabPosition: 'left',
      };
    
      changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
      };
    render() {
        return (
            <div>
            <div style={{ marginBottom: 18 }}>
              Tab position：
              <Select
                value={this.state.tabPosition}
                onChange={this.changeTabPosition}
                dropdownMatchSelectWidth={false}
              >
                <Option value="top">top</Option>
                <Option value="bottom">bottom</Option>
                <Option value="left">left</Option>
                <Option value="right">right</Option>
              </Select>
            </div>
            <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
              <TabPane tab="DASHBOARD" key="1">
               
              </TabPane>
              <TabPane tab="JOB CARDS" key="2">
              </TabPane>
              <TabPane tab="SERVICES" key="3">
              </TabPane>
              <TabPane tab="INVENTORY" key="4">
              </TabPane> 
              <TabPane tab="PRODUCTS" key="5">
              </TabPane> 
              <TabPane tab="EMPLOYEES" key="6">
              </TabPane> 
              <TabPane tab="VENDORS" key="7">
              </TabPane> 
              <TabPane tab="BAYS" key="8">
              </TabPane> 
            </Tabs>
          </div>
        )
    }
}

