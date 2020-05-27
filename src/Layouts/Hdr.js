import React from 'react';
import { Layout } from 'antd';
import "./layout.scss";

const Header = Layout;


// default is flex: auto, and it will enable a gap between content and header
function Hdr(){
    return (
        <Header class='header'> 
            <h1 id="Logo"> YUMMY</h1>
            <p> Share your love for food</p>

            </Header>
    )
}


export default Hdr;