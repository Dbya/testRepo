import React from "react";
import ReactDOM from "react-dom";


function Card (props){
    return (
        <div className="container">
           <div class="card mt-4">
  <h5 class="card-header">{props.heading}</h5>
  <div class="card-body">
  <img src={props.imgsrc} alt="" />
   <p>{props.discription}</p>
    <a href={props.link} > <button className="btn btn-danger">Watch now</button></a>
  </div>
</div>



      
        </div>
    );
}
export default Card;
