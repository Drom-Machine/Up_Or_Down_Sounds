import React from "react"
import { NavLink } from "react-router-dom";



export default function NavBar() {
    return (
        <header >
            <div >
                <nav >
                    <NavLink
                        to="/"
                        exact
                    >
                        Homepage
                    </NavLink>
                    
                    <NavLink to="/SoundStore" 
                        
                    >
                        SoundStore
                    </NavLink>
                    <NavLink to="/CartPage"
                    >
                        Cart Page
                    </NavLink>
                    <NavLink to="/AboutMe"
                    >
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}