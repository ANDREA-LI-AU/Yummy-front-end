import React from 'react';
import { Layout } from 'antd';
import "./layout.scss";
const {  Footer } = Layout;

function Ftr(){
    return (
        <Footer class="footer">
            <p>
                Ant Design ©2018 Created by Ant UED 
                &#10022;      
                Implemented with ♥ by Andrea Li
            </p>
        </Footer>
    )
}


export default Ftr;