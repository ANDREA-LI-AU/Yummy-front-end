import React from 'react';
import { Layout } from 'antd';
//import ReactPlayer from 'react-player';


   
  const { Content } = Layout;
  

class Home extends React.Component{

        render() {
          return (
               
                <Content style={{ margin: '0 16px' }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Feature videos.
                  </div>
                </Content>
                
                
          );
        }
      }
      



export default Home;