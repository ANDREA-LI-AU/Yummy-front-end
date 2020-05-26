import React from 'react';
import { Layout, Menu } from 'antd';

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
   
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  

class Sdr extends React.Component{

        state = {
          collapsed: true,
        };
      
        onCollapse = collapsed => {
          this.setState({ collapsed });
        };
      
        render() {
          return (
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Home
                  </Menu.Item>
                  <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Trending
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<UserOutlined />} title="Playlists">
                    <Menu.Item key="3">Watch Later</Menu.Item>
                    <Menu.Item key="4">Eating</Menu.Item>
                    <Menu.Item key="5">Cooking</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<TeamOutlined />} title="Your Likes">
                    <Menu.Item key="6">Channel 01</Menu.Item>
                    <Menu.Item key="8">Channel 02</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="9" icon={<FileOutlined />} title="Upload"/>
                </Menu>
              </Sider>
          );
        }
      }
      



export default Sdr;