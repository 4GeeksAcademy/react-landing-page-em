import React from "react";

const Card = (props) => {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt=""></img>
        <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
        </div>
    )
}

export default Card;


