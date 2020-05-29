import React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import {
    BarsOutlined,
    BellOutlined,
    HomeOutlined,
    PlusOutlined,
    TagOutlined,
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
                  <Menu.Item icon={<HomeOutlined />}>
                    <Link to={"/"}>
                      Home
                    </Link>
                  </Menu.Item>
                  <Menu.Item icon={<UserOutlined />}>
                    <Link to="/dashboard">
                      Dashboard
                    </Link>
                  </Menu.Item>
                  <Menu.Item icon={ <TagOutlined/>}>
                    <Link to="/category">
                    Category
                  </Link>
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<BarsOutlined />} title="Playlists">
                    <Menu.Item >Watch Later</Menu.Item>
                    <Menu.Item >My Playlist 1</Menu.Item>
                    <Menu.Item >My Playlist 1</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<BellOutlined />} title="Subscription">
                    <Menu.Item >Subscription 01</Menu.Item>
                    <Menu.Item >Subscription 02</Menu.Item>
                  </SubMenu>
                  <Menu.Item icon={<PlusOutlined />}>
                    <Link to={"/upload"}>
                      Upload
                    </Link>
                    </Menu.Item>
                </Menu>
              </Sider>
          );
        }
      }
      



export default Sdr;