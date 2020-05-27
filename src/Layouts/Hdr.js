import React from 'react';
import { Layout } from 'antd';
const { Logo } = './Yummy Logo.png';

const Header = Layout;
// default is flex: auto, and it will enable a gap between content and header
function Hdr(){
    return (
        <Header style={{padding:0, flex: "none", textAlign:"center"}} > 
            <p> This is a Header</p>
            {Logo}
            </Header>
    )
}


export default Hdr;