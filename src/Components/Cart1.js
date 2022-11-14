import React from 'react'
import '../Styles.css';
import card from '../Images/Card.svg'


const Cart1 = () => {
  return (
    <div className="cart">
        <div className="see-all">
             <h2 className="see-all-h2">Recommended</h2>
             <div className="see">
                <h2>See All</h2>
                <span class="material-symbols-outlined">
                navigate_next
                 </span>
             </div>
        </div>

        <div className="product">
        <div className="pro">
            
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

export default Cart1