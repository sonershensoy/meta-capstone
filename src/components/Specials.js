import React from "react"
import Scooter from "../icons_assets/scooter.svg"

export default function Specials({itemName, itemPrice, itemDescription, itemImg}) {
    return(
        <article className="specials-dish-card">
            <div>
                <img src={itemImg} alt="" />
            </div>
            <div className="dish-header">
                <h4>{itemName}</h4>
                <p className="dish-price">${itemPrice}</p>
            </div>
            <div className="dish-footer">
                <p className="item-description">{itemDescription}</p>
                <a className="delivery-btn">
                Order a delivery
                <span>
                 <img src={Scooter} alt="" className="scooter"/>
                </span>
                </a>
            </div>
            
        </article>
    )
}