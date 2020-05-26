import React from 'react';
import { Layout } from 'antd';
const Header = Layout;
// default is flex: auto, and it will enable a gap between content and header
function Hdr(){
    return (
        <Header style={{padding:0, flex: "none"}} > 
            <p>This is a Header</p>
            </Header>
    )
}


export default Hdr;