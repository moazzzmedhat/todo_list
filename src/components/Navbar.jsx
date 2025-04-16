import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{
            padding: "15px",
            backgroundColor: "black",
            color: "white",
            margin: "-8px",
            display: "flex",

        }}>
            <ul style={{
                listStyle: "none",
                display: "flex",
                gap: "20px",
                fontSize: "24px",
            }}>
                <li style={{
                    cursor: "pointer"

                }}>
                    {/* <a href='/page1'>Page1</a> */}
                    <Link to={"/page1"}>Page1</Link>
                </li>
                <li style={{
                    cursor: "pointer"

                }}>
                    <Link to={"/page2"}>Page2</Link>
                </li>
                <li style={{
                    cursor: "pointer"

                }}>
                    <Link to={"/page3"}>Page3</Link>
                </li>
            </ul>
        </div>
    )
}
