import React from 'react';

export default function Card(props){
    let badgeText;
    if(props.data.openSpots === 0){
        badgeText='SOLD OUT';
    } else if (props.data.location === 'Online') {
        badgeText='ONLINE';
    }

    console.log(props);

    return (
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={props.data.coverImg}></img>
            <div className="card-info">
              <p><span id="star"></span>{props.data.stats.rating}<span className='lighten-opacity'> ({props.data.stats.reviewCount})•{props.data.location}</span></p>
              <p>{props.data.title}</p>
              <p><span className='bold'>From ${props.data.price}</span> / person</p>
            </div>
        </div>
    )
}