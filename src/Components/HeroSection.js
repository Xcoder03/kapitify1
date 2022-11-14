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
                        <div className="late">
                            <span class="material-symbols-outlined">
                            expand_more
                            </span>
                            <p>Enugu</p>
                       </div>
                        <div className="late"></div>
                    </div>

                    <button>Apply</button>

                </div>
                <div className="catergory">
                    <div className="cat1">
                        <span>Select Category</span>
                        <span class="material-symbols-outlined">
                            expand_more
                            </span>
                    </div>
                    <p>Select your preferred catergory</p>
                </div>

            </div>
            
            <img className="" src={banner} alt=""></img>
            

        </div>

        <div className="location2">
            <div className="locate">
                <span class="material-symbols-outlined">
                location_searching
                </span>

                <p>Location</p>
            </div>

            <div className="locate">
                 <span class="material-symbols-outlined">
                menu
                </span>

                <p>Sort</p>
            </div>
        </div>

    </div>
  )
}

export default HeroSection