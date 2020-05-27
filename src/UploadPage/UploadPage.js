import React from 'react';
import UploadFile from './UploadFile';
import Ftr from "../Layouts/Ftr";
import Hdr from "../Layouts/Hdr";
import Sdr from "../Layouts/Sdr";
import { Layout } from 'antd';

class UploadPage extends React.Component{

  render(){
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sdr/>
        <Layout>
        <Hdr/>
        <UploadFile/>
        
        <Ftr/>
        </Layout>
      </Layout>
        
    )
  }
}


export default UploadPage;
