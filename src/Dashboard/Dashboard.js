import React from 'react';
import { Layout } from 'antd';
//import ReactPlayer from 'react-player';


   
  const { Content } = Layout;
  

class Dashboard extends React.Component{

        render() {
          return (
               
                <Content style={{ margin: '0 16px' }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Personal information
                  </div>
                </Content>
                
                
          );
        }
      }
      



export default Dashboard;