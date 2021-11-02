import React from "react";
import { useParams } from "react-router"
import hafar from "../Image/hafar.jpeg";
import AlQassim from "../Image/qassim.jpeg";
import Swiss from "../Image/swiss.jpeg";




const Card = () => {
    const cards = [
        {
            id: 0,
            name: "Hafr Albaten",
            img: hafar,
            isFav: false,
          },
          {
            id: 1,
            name: "Alqassim",
            img: AlQassim,
            isFav: false,
          },
          {
            id: 2,
            name: "Swiss",
            img: Swiss,
            isFav: false,
          },
        ];
    
    const id = useParams().id;
    const myItem = cards.find((item, id) => Number(id) === id ); // حولتها لنمبر Number
    
    return (
   <div className="cardCoun">
           <h1> {myItem.name} </h1>
           <img src = {myItem.img} alt='Countries' />
   </div>
   )
}

export default Card;

