import React from 'react'

export const Shops = (props) => {

    return (
        <div className="shops">
            <h4>{props.name}</h4>
            <div>
                <img style = {{"width" : "100px"}} src={props.image} alt="shops"/>
            </div>
        </div>
    )
}

export default Shops;