import React from 'react'

function ResturantCard({data={},handleClick=(e)=>{}}) {
  return (
    <div className="resturant-card" id="resturant-card">
    <div className="resturant-logo"></div>
    <div className="resturant-details">
        <h2>{data.name?data.name:"resturant Name"}</h2>
       <h5>{data.Address?data.Address:"resturant branch"}</h5>
       <h5 >{data.area?data.area:"resturant area"}</h5>
       <h6>{data.contactNumber?data.contactNumber:"contact number"}</h6>
    </div>
    <div className="resturant-gocta" role="button" onClick={handleClick}>
      Menu
    </div>
    
    </div>
  )
}

export default ResturantCard