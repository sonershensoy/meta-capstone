import React from "react"
import { Link } from "react-router-dom"
// Components

import Specials from "./Specials"
import Testimonials from "./Testimonials"

// Images

import food from "../icons_assets/restauranfood.jpg"
import GreekSalad from "../icons_assets/greek-salad.jpg"
import Bruchetta from "../icons_assets/bruchetta.svg"
import LemonDessert from "../icons_assets/lemon-dessert.jpg"
import MarioAdrian from "../icons_assets/Mario and AdrianA.jpg"
import MarioAdrianB from "../icons_assets/Mario and Adrian b.jpg"
import person1 from "../people/person1.jpg"
import person2 from "../people/person2.jpg"
import person3 from "../people/person3.jpg"
import person4 from "../people/person4.jpg"

function renderStars(starNum) {
    let stars = []
    for(let i = 0; i < starNum; i++) {
       stars.push(
       <svg key={i} xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 576 512">
        <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 
        171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329
         113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
         128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
         11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>)
    }
    
    return (
       stars
    )
}

export default function Main() {
    return (
    <main>
        <section className="hero-bg">
            <div className="hero">
                <div className="hero-info">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservations"><button className="btn">Reserve a Table</button></Link>
                </div>
                <div className="hero-img">
                    <img src={food} alt="" />
                </div>
            </div>
        </section>
        <section id="specials">
            <div className="specials">
             <h2>Specials</h2>
             <a href=""><button className="btn">Online Menu</button></a>
            </div>
            <div className="specials-container">
               <Specials 
                itemName= "Greek Salad" 
                itemPrice= {12.99}
                itemDescription= "The famous greek salad of crispy lettuce, pepers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                itemImg = {GreekSalad}
               />
               <Specials 
                itemName="Bruchetta"
                itemPrice= {5.99}
                itemDescription= "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil."
                itemImg = {Bruchetta}
               />
               <Specials 
                itemName="Lemon Dessert"
                itemPrice= {5.00}
                itemDescription= "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                itemImg = {LemonDessert}
               />
            </div>
        </section>
        <section>
            <h2 className="testimonials-section">Testimonials</h2>
            <div className="testimonials-container">
                <Testimonials
                    personImg={person1}
                    name= "Ashley"
                    ratingStar={renderStars(5)}
                    ratingNum={5}
                    reviewText= "Amazing experience! The blend of traditional recipes with a modern twist is outstanding. Warm and welcoming staff. Highly recommend the lamb kebabs and baklava!"
                />
                <Testimonials
                    personImg={person2}
                    name= "Portia"
                    ratingStar={renderStars(4)}
                    ratingNum={4}
                    reviewText="Fantastic find! Unique twist on classic dishes in a cozy setting. Hummus platter and seafood paella are must-tries. Worth the wait time."
                />
                <Testimonials
                    personImg={person3}
                    name= "Penny"
                    ratingStar={renderStars(5)}
                    ratingNum={5}
                    reviewText="Standout Mediterranean restaurant! Grilled octopus and moussaka were delightful. Family-friendly atmosphere with top-notch service. Can’t wait to return!"  
                />
                <Testimonials
                    personImg={person4}
                    name= "Brian"
                    ratingStar={renderStars(5)}
                    ratingNum={5}
                    reviewText= "Go-to spot for Mediterranean cuisine. Traditional recipes with a modern twist nailed perfectly. Falafel and stuffed grape leaves were delicious. Signature cocktails are a must-try!"
                />
            </div>
        </section>
        <section className="about-us-bgcolor" id="about">
            <div className="about-us">
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Welcome to our family-owned Mediterranean restaurant, where we bring the rich flavors of tradition to life with a contemporary flair. Our passion lies in honoring time-honored recipes, handed down through generations, while infusing them with modern techniques to create a unique and delightful dining experience. Every dish we serve is a harmonious blend of the old and the new, crafted with the freshest ingredients and utmost care. Join us and savor the taste of Mediterranean cuisine reimagined in a warm and inviting atmosphere.</p>
                </div>
                <div className="about-us-img-container">
                    <img src={MarioAdrian} alt="" className="about-us-img-a"/>
                    <img src={MarioAdrianB} alt="" className="about-us-img-b"/>
                </div>
            </div>
        </section>
    </main>
)
}