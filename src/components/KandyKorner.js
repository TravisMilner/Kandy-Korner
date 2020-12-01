import React from "react"
import { LocationProvider } from "./Locations/LocationProvider"
import { LocationList } from "./Locations/LocationList"

export const KandyKorner = () => (
    <>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    
    
    
    
    
    </>
)