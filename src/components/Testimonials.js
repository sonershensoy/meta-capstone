import React from "react";




export default function Testimonials({ratingStar, ratingNum, personImg, name, reviewText}) {
    return (
        <article className="testimonial-card">
            <img src={personImg} alt="" className="person-img" />
            <h5>{name}</h5>
            <h6>{ratingStar} <span>{ratingNum}/5</span></h6>
            <p>{reviewText}</p>
         </article>
    )
}