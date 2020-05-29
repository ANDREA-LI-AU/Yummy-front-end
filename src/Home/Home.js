import React from 'react';
import { Layout } from 'antd';
import ReactPlayer from 'react-player';


   
  const { Content } = Layout;
  
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Videos:[ {
        "url": "https://www.youtube.com/watch?v=peeYHIFOv_8",
        "name":"Delicious Cake Decorating Ideas | Quick & Creative Cake Decorating Compilation | So Yummy Dessert" ,
        "author":"yummycake",
        "description":"Delicious Cake Decorating Ideas | Quick & Creative Cake Decorating Compilation | So Yummy Dessert",
        "likes":12
      },
      {
        "url": "https://www.youtube.com/watch?v=aguQliiQOeA",
        "name":"Why This Is Florence’s Most Legendary Steak House | Legendary Eats" ,
        "author":"foodInsider",
        "description":"T-bone steak is a delicacy Florence, Italy. The city has a strong meat culture and strict rules when it comes to how its steaks are cut, grilled, and even served. ",
        "likes":33
      },
      {
        "url": "https://www.youtube.com/watch?v=6SmCcalQElc",
        "name":"The Best Barbecue In Austin | Best Of The Best" ,
        "author":"Food Insider",
        "description":"Austin is one of the best places in the country to get barbecue, especially if you’re looking for Central Texas-style. ",
        "likes":33
      }, ]
    }
  }

 
  
        render() {
                  
          return (
               
                <Content >
                  <div>
                  {
                    this.state.Videos.map(
                      video => (
                        <ReactPlayer url={video.url} light="true"/>
                      )
                    )
                  }

                  </div>
                    
                  
                </Content>
                
                
          );
        }
      }
      



export default Home;