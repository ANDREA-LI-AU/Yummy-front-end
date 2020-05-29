import React from 'react';
import { Layout, Breadcrumb, Menu } from 'antd';
//import ReactPlayer from 'react-player';

import CateVideoLists from './CateVideoLists';
import { Link } from 'react-router-dom';

   
  const { Content } = Layout;
  

class Category extends React.Component{
        render() {
          return (
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Categories</Breadcrumb.Item>
                  </Breadcrumb>
                  <CateVideoLists/>
                </Content>
          );
        }
      }
      



export default Category;