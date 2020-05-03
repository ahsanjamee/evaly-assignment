import React from 'react'

export const Shops = (props) => {

    return (
        <div className="shops">
            <h2>Available Shops</h2>
            {
                props.name? 
                props.name.map((item) => {
                    return(               
                        <div>
                            <h4>{item.shop_name}</h4>
                            <img style = {{"width" : "100px"}} src={item.shop_image} alt="shops"/>
                        </div> 
                    )
                })
                :null
            }
            
        </div>
    )
}

export default Shops;