import React from "react";

function FeedbackItem({item}) {

    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <p className="text-display">{item.text}</p>
        </div>
    )
}

export default FeedbackItem;