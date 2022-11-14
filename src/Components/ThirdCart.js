import React from 'react'
import '../Styles.css';
import card from '../Images/Card.svg'
import pips from '../Images/pips.svg'
    
const ThirdCart = () => {
  return (
    <div className="third-cart">
    <div className="see-all2">
        <div className="see see2">
            <h2>Open Offers</h2>
            <img src={pips} alt=""></img>
         </div>
         <div className="see see3">
            <h2>See All</h2>
            <span class="material-symbols-outlined">
            navigate_next
            </span>
         </div>
    </div>

    <div className="product pro2">
    <div className="pro pro1">
        
          <img className="image" src={card} alt=""></img>
          <img className="image" src={card} alt=""></img>
          <img className="image kill" src={card} alt=""></img>
          <img className="image kill" src={card} alt=""></img>
          <img className="image kill" src={card} alt=""></img>
    </div>

        <div className="pro pro1 pro3">
            
            <img className="image" src={card} alt=""></img>
            <img className="image" src={card} alt=""></img>
            <img className="image kill" src={card} alt=""></img>
            <img className="image kill" src={card} alt=""></img>
            <img className="image kill" src={card} alt=""></img>
      </div>
 
 

    </div>

</div>
  )
}

export default ThirdCart