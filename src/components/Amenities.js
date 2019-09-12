import React from 'react';


class Amenities extends React.Component {
  state = {
    amenities: ["tv", "lake", "kayak", "beach"],
  }


  render() {
   return(
     <div>
      <h2>
        Amenities
      </h2> 
     <ul>
       {this.state.amenities.map(x => {
         return(
           <li>
             {x}
           </li>
         )
       })}
     </ul>
     </div>
   )
  }

}

export default Amenities;