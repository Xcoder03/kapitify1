import React from 'react'
import '../Styles.css';
import woman1 from '../Images/woman1.svg'
import man1 from '../Images/man1.svg'
import man2 from '../Images/man2.svg'
import man3 from '../Images/man3.svg'
import man4 from '../Images/man4.svg'
import man5 from '../Images/man5.svg'
import shield from '../Images/shield.svg'
import logo from '../Images/Logo.svg'
import icons from '../Images/icons.svg'
const Footer = () => {
  return (
    <div className="foot">
        <div className="swappers">
            <div className="popular">
                <p>Popular Swappers</p>
                <img className="" src={shield} alt=""></img>
            </div>

            <div className="popular-images">
                    <div className="popular-img">
                        <img className="" src={woman1} alt=""></img>
                        <img className="" src={man1} alt=""></img>
                        <img className="man2" src={man2} alt=""></img>
                    </div>
                    <div className="popular-img">
                        <img className="" src={man3} alt=""></img>
                        <img className="" src={man4} alt=""></img>
                        <img className="" src={man5} alt=""></img>
                    </div>
            </div>
        </div>

        <div className="first-footer">
            <img className="" src={logo} alt=""></img>
            <img className="" src={icons} alt=""></img>
            <div className="features">
              <div className="product-features">
                <div className="main-products">
                    <h2>Products</h2>
                    <p>How it works</p>
                    <p>Features</p>
                    <p>Browse Categories</p>
                    <div className="stops">
                        <p>Kapitify Pro</p>
                        <div>Coming soon</div>
                    </div>
                </div>

                <div className="main-products">
                    <div className="stop">
                        <h2>Support&</h2>
                        <h2>Resources</h2>
                    </div>
                    <p>Blog</p>
                    <p>FAQs</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
            </div>

            <div className="main-product">
                    <h2>Legal</h2>
                    <p>Terms & Condition</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    
             </div>


         </div>
            <div className="footer">
                <footer> &copy; 2022 Kapitify Labs</footer>
                <p>Rights Reserved.</p>
            </div>

        </div>

    </div>
  )
}

export default Footer