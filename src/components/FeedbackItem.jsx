import React from "react";
import { FaTimes } from 'react-icons/fa'; 

import Card from "./shared/Card";

function FeedbackItem({item, handleDelete}) {
    
    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <p className="text-display">{item.text}</p>
        </Card>
    )
}

export default FeedbackItem;