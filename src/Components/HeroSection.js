import React from 'react'
import banner from '../Images/banner.svg'
import '../Styles.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="hero">
            <div className="location">
                <div className="enter-locate">
                    <h2>Enter Location</h2>
                    <p>Put in the location you're currently in to see swaps around you.</p>
                    <div className="state">
                        <p>State</p>
                        <p>City/LGA</p>
                    </div>
                    <div className="enugu">
                        <div className="late">Enugu</div>
                        <div className="late">Enugu</div>
                    </div>

                    <button>Apply</button>

                </div>
                <div className="catergory">
                    <div className="cat1">
                        <span>Category</span>
                    </div>
                    <p>Select your preferred catergory</p>
                </div>

            </div>
            <div className="hero-image">
            <img className="img" src={banner} alt=""></img>
            </div>

        </div>

        <div className="location2">
            <div className="locate"></div>
        </div>

    </div>
  )
}

export default HeroSection