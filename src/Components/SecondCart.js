import React from 'react'
import '../Styles.css';
import card from '../Images/Card.svg'

const SecondCart = () => {
  return (
    <div className="second-cart">
    <div className="see-all">
         <h2 className="see-all-h2">Discover Swaps</h2>
         <div className="see">
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

export default SecondCart