import React from 'react';
import './componentStyles.css';

function Card(props) {
    return (
        <div className='info'>
            <img src={props.userCards.avatar_url} alt='Picture' />
            <div className='lines2'>{props.userCards.login}</div>
            <div className='lines3'>{props.userCards.type}</div>
        </div>
    );
}

export default Card;