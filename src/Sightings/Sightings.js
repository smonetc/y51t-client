import React from 'react'

export default function Sightings(props){
    return(
        <div>
            <p className='inline'>Date: {props.date}</p>
            <p className='inline left'>Type: {props.category}</p>
            <p className='inline left'>Location: {props.location}</p>
            <p>Content: {props.content}</p>
            <p>Author: {props.username}</p>
        </div>
    )
}