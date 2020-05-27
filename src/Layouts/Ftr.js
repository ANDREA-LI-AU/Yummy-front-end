import React from 'react';
import { Layout } from 'antd';
const {  Footer } = Layout;

function Ftr(){
    return (
        <Footer style={{textAlign:"center"}}>
            <p>
                Ant Design ©2018 Created by Ant UED
            </p>
            <p>
                Implemented with ♥ by Andrea 
            </p>
        </Footer>
    )
}


export default Ftr;