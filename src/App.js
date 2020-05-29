import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import Ftr from './Layouts/Ftr';
import Hdr from './Layouts/Hdr';
import Sdr from './Layouts/Sdr';
import { Layout } from 'antd';


function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>

        <Sdr/>

          <Layout>

          <Hdr/>
          <Routes/>
          <Ftr/>

      </Layout>
  </Layout>
    </div>
  );
}

export default App;
