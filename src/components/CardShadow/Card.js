import React from 'react'
import './Card.css'

export default function Card(props) {
    const Class = `card ${props.className} `;
    return (
        <div className={Class} >
            {props.children}
        </div>
    )
}
