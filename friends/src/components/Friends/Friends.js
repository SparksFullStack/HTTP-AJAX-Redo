import React from "react";
import "./Friends.css";
import { Link } from "react-router-dom";

const Friends = (props) => {
    return(
        <div className='friends'>
            {props.friendsData.map(friend => {
                return(
                    <div className='friendCard' key={friend.id}>
                        <h1 className='friendCard__name'>{friend.name}</h1>
                        <p className='friendCard__text'><strong>Age</strong>: {friend.age}</p>
                        <p className='friendCard__text'><strong>Email</strong>: {friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;