import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import './homepage.css'

const cardItems = [
  {
    id:0,
    image:"https://picsum.photos/200/300",
    title:" first ",
    
  },
  {
    id:1,
    image:"https://picsum.photos/200/301",
    title:"second",
    
  },
  {
    id:2,
    image:"https://picsum.photos/201/300",
    title:"Third",
  
  }
]

class Homepage extends Component {
  render() {
    // const dispatch = this.props.dispath;
    // const { loggedIn } = this.props.data;



    return (
      <article>
        <div className='cardContainer'>

          {
            cardItems.map((item)=>{
                  return <Cards key={item.id} image={item.image} title = {item.title} />
            })

          }




          {/* <section >
            <h1 className="a">Homepage</h1>
            <div className="b" >
               <div>
                 <Link to="/">Navbar</Link>
               </div> 
               <div>
                 <Link to="/login">Login</Link>
               </div>
               <div> 
                 <Link to="/signup">Sign Up</Link>
               </div>
              </div>
          </section> */}
        </div>
      </article>
    );
  }
}



export default Homepage;