import React from 'react';
import { Layout, Breadcrumb } from 'antd';
//import ReactPlayer from 'react-player';
import Ftr from '../Layouts/Ftr';
import Hdr from '../Layouts/Hdr';
import Sdr from '../Layouts/Sdr';

   
  const { Content } = Layout;
  

class Category extends React.Component{

    
        render() {
          return (
            <Layout style={{ minHeight: '100vh' }}>

              <Sdr/>

              <Layout>

               <Hdr/>
               
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Pastry</Breadcrumb.Item>
                  </Breadcrumb>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Pastry videos.
                  </div>
                </Content>
                
                <Ftr/>

              </Layout>
            </Layout>
          );
        }
      }
      



export default Category;