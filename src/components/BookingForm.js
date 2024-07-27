import React from "react";
import { useState } from "react"
// import { fetchAPI, submitAPI } from "../API"
import { useNavigate } from "react-router-dom";
import "../components/reservations.css"

export default function BookingForm() {
  
    const [formData, setFormData] = useState(
        {
            date: "",
            time: "",
            guests: 1,
            occasion: "",
            tablePlace: "",
            requests:""
        }
    )   

    const [availableTimes, setAvailableTimes] = useState(
        ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    )

    function handleChange(e) {
        const {name, type, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }


    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const isSuccessful = true; 
        
        if (isSuccessful) {
            setFormData({
                date: "",
                time: "",
                guests: 1,
                occasion: "",
                tablePlace: "",
                requests: ""
            });
            navigate("/confirmation");
        } else {
            alert("There was an issue with your reservation. Please try again.");
        }
    }

    return ( 
        <>
            <section className="reservation-container">
                <h1>Table Reservation</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="date">Date</label>
                    <input
                        required
                        id="date"
                        type="date" 
                        onChange={handleChange}
                        name="date"
                        value={formData.date}
                    />
                     <label htmlFor="time" required>Time</label>
                    <select
                        required
                        id="time" 
                        onChange={handleChange}
                        name="time"
                        value={formData.time}
                    >
                        {availableTimes.map((time) => (
                         <option key={time} value={time}>{time}</option> 
                        ))}
                    </select>
                    <label htmlFor="guests">Number of guests: {formData.guests}</label>
                    <input
                        required 
                        type="range" 
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guests"
                        onChange={handleChange}
                        name="guests"
                        value={formData.guests}
                     />
                    <label htmlFor="tablePlace">Table Place</label>
                    <select
                        required
                        id="tablePlace" 
                        onChange={handleChange}
                        name="tablePlace"
                        value={formData.tablePlace}
                    >
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </select>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion" 
                        onChange={handleChange}
                        name="occasion"
                        value={formData.occasion}
                    >
                        <option value="anniversary">No occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    <label htmlFor="requests">Special Request</label>
                    <textarea
                        id="requests"
                        name="requests"
                        cols= "30"
                        rows= "8"
                        placeholder="Please type your request"
                        onChange={handleChange} 
                        value={formData.requests}
                    />
                    <button>Reserve</button>
                </form>

            </section>
        </>
    )
}