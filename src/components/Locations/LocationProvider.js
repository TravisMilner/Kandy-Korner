import React, { useState } from "react"

// This context is imported and used by individual components that need data

export const LocationContext = React.createContext()

// This componenet establishes what data can be used

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res=> res.json())
        .then(setLocations)
    }

    const addLocations = () => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(getLocations)
    }

    // return the context provider whih has the locations state, the add location function, and the getlocation function as keys. This allows any child element to access them

    return (
        <LocationContext.Provider value ={{
            locations, addLocations, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}