import React from "react"


export const Location = ({location}) => {
    <section className = "location">
        <h3 className = "location__name">Location: {location.name}</h3>
        <address className = "location__address">Address: {location.address}</address>
        <p className = "location__footage">Square Footage: {location.squareFootage}</p>
        <p className = "location__handicap">Handicap Accessible: {location.handicap}</p>
    </section>
}