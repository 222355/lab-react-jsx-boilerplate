import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import DataComponents from "./Components/Datacomponents";
     class AppClass extends Component{
      
      render(){
        return(
          <>
          <div className='image-gallary'>
          <h1>Kalvium gallary</h1>
          {DataComponents().map((data)=>(
              <Image key ={data.ind} img={data.img} alt={`Elephant${data.i}`}></Image>
            ))}
          </div>
    </>
  )
}
}
const Image=({img,alt})=>{
  return <img src={img} alt={alt}/>
}
export default AppClass
