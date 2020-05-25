import React from 'react';
import { Button } from 'antd';
import ReactPlayer from 'react-player';


class Home extends React.Component{

    render(){
       
        return(
            <div>
        <Button type="primary">Button </Button>
        <ReactPlayer url="https://www.youtube.com/watch?v=XBJKi2tcKkE" />
            </div>
       
        );

        
    }
        
}



export default Home;